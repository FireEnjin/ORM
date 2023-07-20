declare type ID = string | number;
export declare function FireEnjinModel<T, Y = void>({ hooks, driver, }?: {
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
        beforeAdd?: (data?: any, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs before a document is edited. If it returns a falsey value it will stop the edit return null.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The content to be merged with the existing document
         */
        beforeEdit?: (data?: any, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs before a document is deleted. If it returns a falsey value it will stop the delete return null.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The document that was deleted
         */
        beforeDelete?: (data?: Partial<T>, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs before a document is written. If it returns a falsey value it will stop the write return null.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The content to be merged with the existing document
         */
        beforeWrite?: (data?: any, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs before a document is retrieved.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The document data to be returned
         */
        beforeFind?: (id?: string, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs before retrieving a list of documents.
         * @param data The list query data
         * @param options Extra options for the request
         *
         * @returns The list of documents
         */
        beforeList?: (data?: any, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
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
        afterAdd?: (data?: Partial<T>, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs after a document is edited.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The document data to be returned
         */
        afterEdit?: (data?: Partial<T>, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs after a document is written.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The document data to be returned
         */
        afterWrite?: (data?: Partial<T>, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs after a document is deleted.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The document data to be returned
         */
        afterDelete?: (data?: Partial<T>, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs after a document is retrieved.
         * @param data The input data for the request
         * @param options Extra options for the request
         *
         * @returns The document data to be returned
         */
        afterFind?: (id?: string, options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
        /**
         * Hook that runs after returning a list of documents
         * @param data The list query data for the request
         * @param options Extra options for the request
         *
         * @returns The list of documents
         */
        afterList?: (data?: Partial<T>[], options?: {
            type?: string;
            requestData?: any;
            context?: any;
            roles?: string[];
        }) => any;
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
        add?: (input?: any, options?: any) => any;
        /**
         * The method to edit a record in the database
         */
        edit?: (input?: any, options?: any) => any;
        /**
         * The method to delete a record in the database
         */
        delete?: (input?: any, options?: any) => any;
        /**
         * The method to find a record in the database
         */
        find?: (input?: any, options?: any) => any;
        /**
         * The method to get a list of records in the database
         */
        list?: (input?: any, options?: any) => any;
    };
}): (abstract new (_partial?: Partial<T>, options?: {
    storagePath?: string;
    filterKeys?: string[];
}) => {
    _storagePath: string;
    _filterKeys: string[];
    id?: ID;
    _partial: Partial<T>;
    save(): {};
    data(): Partial<T>;
}) & {
    add(input: Y | T, id?: ID): Promise<any>;
    edit(id: ID, input: Y | T): Promise<(T | Y) & {
        id?: ID;
    }>;
    delete(id: ID): Promise<{
        id: ID;
    }>;
    find(id: ID): Promise<T>;
    list(): Promise<any[]>;
};
export declare function Model({ storagePath, }?: {
    storagePath?: string;
}): (constructor: Function) => void;
export declare function Relation({ model, storagePath, }?: {
    model?: any;
    storagePath?: string;
}): (target: Object, key: string) => void;
export declare function Transform({ get, set, }?: {
    get?: (value: any) => any;
    set?: (value: any) => any;
}): (target: Object, key: string) => void;
export {};
