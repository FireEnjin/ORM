declare type ID = string | number;

function FireEnjinModel<T, Y = void>({
  hooks,
  driver,
}: {
  /**
   * A list of hooks where you can manipulate or
   * listen for model events
   */
  hooks?: {
    /**
     * Hook that runs before a document is added. If it returns a falsey value it will stop the creation return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The content to be merged with the existing document
     */
    beforeAdd?: (
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs before a document is edited. If it returns a falsey value it will stop the edit return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The content to be merged with the existing document
     */
    beforeEdit?: (
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs before a document is deleted. If it returns a falsey value it will stop the delete return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document that was deleted
     */
    beforeDelete?: (
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs before a document is written. If it returns a falsey value it will stop the write return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The content to be merged with the existing document
     */
    beforeWrite?: (
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs before a document is retrieved.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    beforeFind?: (
      id?: string,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs before retrieving a list of documents.
     * @param data The list query data
     * @param options Extra options for the request
     *
     * @returns The list of documents
     */
    beforeList?: (
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Ran at beginning of model when initialized with new keyword
     */
    beforeInit?: () => void;
    /**
     * Hook that runs after a document is added.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    afterAdd?: (
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs after a document is edited.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    afterEdit?: (
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs after a document is written.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    afterWrite?: (
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs after a document is deleted.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    afterDelete?: (
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs after a document is retrieved.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    afterFind?: (
      id?: string,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs after returning a list of documents
     * @param data The list query data for the request
     * @param options Extra options for the request
     *
     * @returns The list of documents
     */
    afterList?: (
      data?: Partial<T>[],
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ) => any;
    /**
     * Hook that runs after this model is initialized with new keyword
     */
    afterInit?: () => void;
  };
  /**
   * The database driver to wire model to
   */
  driver?: {
    /**
     * The raw database service (USE SHOULD BE AVOIDED FOR VENDOR-LOCKING)
     */
    service?: any;
    /**
     * The method to add a record in the database
     */
    add?: (input?, options?) => any;
    /**
     * The method to edit a record in the database
     */
    edit?: (input?, options?) => any;
    /**
     * The method to delete a record in the database
     */
    delete?: (input?, options?) => any;
    /**
     * The method to find a record in the database
     */
    find?: (input?, options?) => any;
    /**
     * The method to get a list of records in the database
     */
    list?: (input?, options?) => any;
  };
} = {}) {
  abstract class BaseModel {
    private _storagePath: string;
    private _filterKeys: string[] = [];
    id?: ID;

    constructor(
      protected _partial: Partial<T> = {},
      options?: {
        storagePath?: string;
        filterKeys?: string[];
      }
    ) {
      if (typeof hooks?.beforeInit === "function") hooks.beforeInit();
      Object.assign(this, this._partial);
      this._storagePath =
        options?.storagePath ||
        this.constructor.name.toLocaleLowerCase().replace(" ", "_");
      this._filterKeys = options?.filterKeys || [];
      if (typeof hooks?.afterInit === "function") hooks.afterInit();
    }

    static async add(input: Y | T, id?: ID) {
      let data: (Y | T) & { id?: ID } = { ...input };
      let res = null;
      if (id) data.id = id;
      if (typeof hooks?.beforeAdd === "function")
        data = await hooks.beforeAdd(data);
      if (typeof driver?.add === "function") res = await driver.add(data);
      if (typeof hooks?.afterAdd === "function")
        res = await hooks.afterAdd(res);
      return res;
    }

    static async edit(id: ID, input: Y | T) {
      const data: (Y | T) & { id?: ID } = { ...input };
      if (id) data.id = id;
      return data;
    }

    static async delete(id: ID) {
      const data = { id };
      return data;
    }

    static async find(id: ID) {
      const data = { id };
      return data;
    }

    static async list() {
      return [];
    }

    public save() {
      console.log("Saving: ", this);
      return {};
    }

    public data() {
      for (const [key, value] of Object.entries(this)) {
        if (!key || this._filterKeys.includes(key) || key.charAt(0) === "_")
          continue;
        this._partial[key] = value;
      }

      return this._partial;
    }
  }

  return BaseModel;
}

function Model({
  storagePath,
}: {
  storagePath?: string;
} = {}) {
  return (constructor: Function) => {
    console.log(constructor);
  };
}

function Relation({
  model,
  storagePath,
}: {
  model?: any;
  storagePath?: string;
} = {}) {
  return (target: Object, key: string) => {
    delete target[key];
    const backingField = "_" + key;

    Object.defineProperty(target, backingField, {
      writable: true,
      enumerable: true,
      configurable: true,
    });

    Object.defineProperty(target, key, {
      get(this: any) {
        const currentValue = this[backingField];
        console.log(`Get: ${key} => ${currentValue}`);
        return currentValue;
      },
      set(this: any, newValue: any) {
        console.log(`Set: ${key} => ${newValue}`);
        this[backingField] = newValue;
        this._partial[key] = newValue;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

function Transform({
  get,
  set,
}: { get?: (value) => any; set?: (value) => any } = {}) {
  return (target: Object, key: string) => {
    delete target[key];
    const backingField = "_" + key;

    Object.defineProperty(target, backingField, {
      writable: true,
      enumerable: true,
      configurable: true,
    });

    Object.defineProperty(target, key, {
      get(this: any) {
        const currentValue = this[backingField];
        console.log(`Transform Get: ${key} => ${currentValue}`);
        return typeof get === "function" ? get(currentValue) : currentValue;
      },
      set(this: any, newValue: any) {
        const value = typeof set === "function" ? set(newValue) : newValue;
        console.log(`Transform Set: ${key} => ${value}`);
        this[backingField] = value;
        this._partial[key] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

@Model()
class User extends FireEnjinModel<User>() {
  /**
   * The person's first name
   */
  firstName: string;
  /**
   * The person's last name
   */
  lastName?: string;
  /**
   * The photo for the person
   */
  photo?: string;
}

@Model()
class Test extends FireEnjinModel<Test>({
  hooks: {
    beforeAdd() {
      console.log("starting Test Model");
    },
  },
}) {
  /**
   * Name of the record
   */
  name?: string;
  /**
   * Woo
   */
  @Transform({ set: (val) => `waa-${val}`, get: (val) => `${val}-wii` })
  wee?: string;
  /**
   * The User tied
   */
  @Relation({ model: User })
  user: User;
}

const testing = new Test();
testing.name = "wee";
testing.wee = "woo";
console.log(testing.user?.firstName);
testing.user = new User({
  firstName: "Bobby",
  lastName: "Johnson",
});
console.log(testing.wee, testing.data());
