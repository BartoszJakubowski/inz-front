import * as types from './types';
import { ActionResponse } from 'types/redux/ActionResponse';

import { reduxRequest as request } from 'services/Api';
import { withVariables } from 'utils/string';
import { createSession, destroySession } from 'services/Auth';

import {
    ENDPOINT_PUBLIC_TOKEN,
    ENDPOINT_PUBLIC_USER,
    ENDPOINT_PUBLIC_PASSWORD,
    ENDPOINT_AUTH_PROFILE,
} from 'consts/api';

export const setAuthToken = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch({
        type: types.SET_AUTH_TOKEN,
        payload: params,
    });
};

export const login = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: withVariables(types.LOGIN, params),
            method: 'POST',
            path: ENDPOINT_PUBLIC_TOKEN,
            params,
            requestParams: params,
        })
    )
        .then(response => {
            createSession(response.payload.data);
            return response;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export const logout = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: types.LOGOUT,
            method: 'DELETE',
            path: withVariables(ENDPOINT_PUBLIC_TOKEN, params),
            params,
        })
    )
        .then(response => {
            destroySession();
            return response;
        })
        .catch(error => {
            console.error(error);

            destroySession();
            throw error;
        });
};

export const register = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: types.LOGIN,
            method: 'POST',
            path: withVariables(ENDPOINT_PUBLIC_USER, params),
            params,
            requestParams: params,
        })
    )
        .then(response => {
            createSession(response.payload.data);
            return response;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export const profileGet = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: types.PROFILE_GET,
            method: 'GET',
            path: withVariables(ENDPOINT_AUTH_PROFILE, params),
            params,
            actionsOnCode: {
                401: (response: any) => dispatch(logout()),
            },
        })
    )
        .catch(error => {
            destroySession();
            console.error(error);
            throw error;
        });
};

export const profileUpdate = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: types.PROFILE_UPDATE,
            method: 'PUT',
            path: withVariables(ENDPOINT_AUTH_PROFILE, params),
            params,
            requestParams: params,
        })
    )
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export const passwordReset = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: types.PASSWORD_RESET,
            method: 'DELETE',
            path: ENDPOINT_PUBLIC_PASSWORD,
            params,
            requestParams: params,
        })
    )
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export const passwordChange = (params: object = {}) => (dispatch: Function, getState: Function): Promise<ActionResponse> => {
    return dispatch(
        request({
            getState,
            reduxType: types.PASSWORD_CHANGE,
            method: 'POST',
            path: ENDPOINT_PUBLIC_PASSWORD,
            params,
            requestParams: params,
        })
    )
        .catch(error => {
            console.error(error);
            throw error;
        });
};
