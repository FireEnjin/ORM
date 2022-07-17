// import pluralize from "pluralize";
declare type ID = string | number;

function FireEnjinModel<T, Y = void>() {
  abstract class Resource {
    private storagePath: string;
    id?: ID;
    filterKeys: string[] = ["partial", "storagePath", "filterKeys"];

    constructor(
      protected partial: Partial<T> = {},
      options?: {
        storagePath?: string;
      }
    ) {
      Object.assign(this, this.partial);
      this.storagePath = options?.storagePath || this.constructor.name;
      // options?.storagePath || pluralize(this.constructor.name);
    }

    static async add(input: Y | T, id?: ID) {
      const data: (Y | T) & { id?: ID } = { ...input };
      if (id) data.id = id;
      return data;
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
      console.log(this);
      return {};
    }

    public data() {
      for (const [key, value] of Object.entries(this)) {
        if (!key || this.filterKeys.includes(key) || key.charAt(0) === "_")
          continue;
        this.partial[key] = value;
      }

      return this.partial;
    }

    /**
     * Hook that runs before a document is added. If it returns a falsey value it will stop the creation return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The content to be merged with the existing document
     */
    private async beforeAdd?(
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs after a document is added.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    private async onAfterAdd?(
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs before a document is edited. If it returns a falsey value it will stop the edit return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The content to be merged with the existing document
     */
    private async onBeforeEdit?(
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs after a document is edited.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    private async onAfterEdit?(
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs before a document is written. If it returns a falsey value it will stop the write return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The content to be merged with the existing document
     */
    private async onBeforeWrite?(
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs after a document is written.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    private async onAfterWrite?(
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs before a document is deleted. If it returns a falsey value it will stop the delete return null.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document that was deleted
     */
    private async onBeforeDelete?(
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs after a document is deleted.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    private async onAfterDelete?(
      data?: Partial<T>,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs before retrieving a list of documents.
     * @param data The list query data
     * @param options Extra options for the request
     *
     * @returns The list of documents
     */
    private async onBeforeList?(
      data?: any,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any[]>;

    /**
     * Hook that runs after returning a list of documents
     * @param data The list query data for the request
     * @param options Extra options for the request
     *
     * @returns The list of documents
     */
    private async onAfterList?(
      data?: Partial<T>[],
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any[]>;

    /**
     * Hook that runs before a document is retrieved.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    private onBeforeFind?(
      id?: string,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;

    /**
     * Hook that runs after a document is retrieved.
     * @param data The input data for the request
     * @param options Extra options for the request
     *
     * @returns The document data to be returned
     */
    private async onAfterFind?(
      id?: string,
      options?: {
        type?: string;
        requestData?: any;
        context?: any;
        roles?: string[];
      }
    ): Promise<any>;
  }

  return Resource;
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
        if (!newValue?.id) newValue.save();
        console.log(`Set: ${key} => ${newValue}`);
        this[backingField] = newValue;
        this.partial[key] = newValue;
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
class Test extends FireEnjinModel<Test>() {
  /**
   * Name of the record
   */
  name?: string;
  /**
   * Woo
   */
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
console.log(testing.data());
