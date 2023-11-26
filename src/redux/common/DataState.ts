export enum ApiStatus {
  NONE,
  LOADING,
  SUCCESS,
  ERROR,
}

export interface DataState<T> {
  data: T;
  status: ApiStatus;
  error: string | null;
}
