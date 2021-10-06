
export default interface Element<T> {
    params: any;
    data: T;
    isLoaded: boolean;
    isLoading: boolean;
    error: boolean;
}
