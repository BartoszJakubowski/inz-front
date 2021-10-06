import { ApiResponseBody } from 'types/request';

export interface ActionResponse {
    state: string;
    type: string;
    payload: ApiResponseBody,
    params?: any,
}