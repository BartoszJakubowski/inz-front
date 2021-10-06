export default interface ListCollection<Model> {
    params: any;
    elements: Model[];
    isLoaded: boolean;
    isLoading: boolean;
    meta: ListMeta;
    error: boolean;
}

export interface ListMeta {
    total: number;
    count: number;
    currentPage: number;
    perPage: number;
    lastPage: number;
    hasMorePages: boolean;
}