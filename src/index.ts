function Resource<T>() {
abstract class Resource {
  private storagePath: string;
  id?: string | number;

  constructor(protected partial?: Partial<T>) {
    Object.assign(this, this.partial);
  }

  static add(input: (T) & { id?: any }, id?: any) {
    const data = { ...input };
    if (id) data.id = id;
    return data;
  }

  edit() {}

  delete() {}

  find() {}

  list() {}

  public save() {
    return {};
  }

  /**
   * Hook that runs before a document is added. If it returns a falsey value it will stop the creation return null.
   * @param data The input data for the request
   * @param options Extra options for the request
   *
   * @returns The content to be merged with the existing document
   */
  private async onBeforeAdd?(
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
export class User extends Resource<User>() {
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

const person = new User({ firstName: "bo" });
person.firstName = "test";
person.
