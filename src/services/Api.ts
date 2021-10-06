import getConfig from 'next/config';
import axios, { AxiosRequestConfig } from 'axios';

import { INIT_FLAG, SUCCESS_FLAG, FAIL_FLAG } from 'consts/redux';
import { State as ReduxState } from 'store/state';

import { parseToQueryString } from 'utils/querystring';
import { mapErrors } from 'utils/api';

import Logger from 'services/Logger';

export interface ReduxRequestOptions {
    getState: Function;
    ignoreState?: boolean;
    reduxType: string;
    method: string;
    path: string;
    params: any;
    headers?: any;
    requestParams?: any;
    forceMethod?: string;
    asFormData?: boolean;
    url?: string;
    apiUrl?: string;
    data?: any;
    timeout?: number;
    actionsOnCode?: {
        [field: number]: (response: any) => any;
    };
}

export interface ReduxRequestPayload {
    state: string;
    type: string;
    payload: {
        data: any;
    };
    params: object;
}

export const reduxRequest = (options: ReduxRequestOptions) => (dispatch: Function) : Promise<ReduxRequestPayload> => {
    const storeState = options.getState();
    options = transformOptions(options, storeState);

    if(!options.ignoreState) {
        dispatch({
            state: INIT_FLAG,
            type: options.reduxType + '_' + INIT_FLAG,
            params: options.params,
        });
    }

    return new Promise((resolve, reject) => {
        const requestConfig = getRequestCofnig(options);
        // Logger.log('API Request', {
        //     url: requestConfig.url,
        //     options: options,
        //     requestConfig: requestConfig,
        // });

        return axios(requestConfig)
            .then(response => {
                // Logger.log('API Response', options, response);

                if(options.actionsOnCode && options.actionsOnCode[response.status]) {
                    options.actionsOnCode[response.status](response);
                }

                return resolve(
                    options.ignoreState
                        ? {
                            state: SUCCESS_FLAG,
                            type: options.reduxType + '_' + SUCCESS_FLAG,
                            payload: response,
                            params: options.params,
                        }
                        : dispatch({
                            state: SUCCESS_FLAG,
                            type: options.reduxType + '_' + SUCCESS_FLAG,
                            payload: response,
                            params: options.params,
                        })
                );
            })
            .catch(error => {
                console.error(error && error.response || error);
                try {
                    Logger.warning('API Error', {
                        options,
                        response: error.response,
                    });

                    if(options.actionsOnCode && options.actionsOnCode[error?.response?.status]) {
                        options.actionsOnCode[error?.response?.status](error?.response);
                    }

                    return reject(
                        options.ignoreState
                            ? {
                                state: FAIL_FLAG,
                                type: options.reduxType + '_' + FAIL_FLAG,
                                payload: mapErrors(error && error.response),
                                params: options.params,
                            }
                            : dispatch({
                                state: FAIL_FLAG,
                                type: options.reduxType + '_' + FAIL_FLAG,
                                payload: mapErrors(error && error.response),
                                params: options.params,
                            })
                    );
                } catch (error) {
                    Logger.error('API Network Error', {
                        options,
                        error,
                    });

                    return reject(
                        options.ignoreState
                            ? {
                                state: FAIL_FLAG,
                                type: options.reduxType + '_' + FAIL_FLAG,
                                payload: mapErrors(error && error.response),
                                params: options.params,
                            }
                            : dispatch({
                                state: FAIL_FLAG,
                                type: options.reduxType + '_' + FAIL_FLAG,
                                payload: mapErrors(error && error.response),
                                params: options.params,
                            })
                    );
                }
            })
    });
};

// export function redirectToApiEndpoint(path) {
//     const store = initializeStore({});
//     const storeState = store.getState();
//     const apiUrl = parseToQueryString(process.env.API_URL + path, {
//         authToken: storeState.user.authToken,
//     });

//     const win = window.open(
//         apiUrl,
//         '_blank'
//     );
//     win.focus();
// }

function getRequestCofnig(options: any): AxiosRequestConfig {
    return {
        method: options.method.toUpperCase(),
        url: options.url,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            ...options.headers,
        },
        data: options.data,
        timeout: options.timeout || 10000,
        responseType: 'json',
        adapter: options.adapter || undefined,
        validateStatus: status => {
            return status >= 200 && status < 300;
        },
        paramsSerializer: params => {
            return JSON.stringify(params);
        },
    };
}

function transformOptions(options: ReduxRequestOptions, storeState: ReduxState) {
    const { publicRuntimeConfig } = getConfig();

    // Attach headers
    options.headers = {
        ...options.headers || {},
    };

    if (storeState.user?.authToken) {
        options.headers = {
            ...options.headers,
            'authorization': 'Bearer ' + storeState.user.authToken,
        };
    }

    // Ensure that requestParams is object
    if (typeof options.requestParams !== 'object' || !options.requestParams) {
        options.requestParams = {};
    }

    // Support for PUT request methods
    if (options.method.toUpperCase() === 'PUT' && !options.forceMethod) {
        options.method = 'POST';
        options.requestParams._method = 'PUT';
    }

    // Support for DELETE request methods
    if (options.method.toUpperCase() === 'DELETE' && !options.forceMethod) {
        options.method = 'POST';
        options.requestParams._method = 'DELETE';
    }

    if (options.method.toUpperCase() === 'GET') {
        options.path = parseToQueryString(options.path, options.requestParams);
    }

    options.data = options.requestParams;
    if (options.asFormData) {
        const formData = new FormData();
        Object.keys(options.data).forEach(key => {
            formData.append(key, options.data[key]);
        });
        options.data = formData;
    }

    // Get api path
    options.url = publicRuntimeConfig.API_URL + options.path;
    if (options.apiUrl) {
        options.url = options.apiUrl + options.path;
    }

    return options;
}
