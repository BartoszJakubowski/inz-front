import {
    ERROR_CODE_NOT_AUTHORIZED,
    ERROR_CODE_NOT_VALIDATED,
    ERROR_MSG_CRITICAL,
    ERROR_MSG_VALIDATION,
    ERROR_MSG_NOT_AUTHOIZED,
} from 'consts/errors';

import { ApiResponseBody, ApiResponseErrors } from 'types/request';

export const mapErrors = (responseBody: ApiResponseBody): ApiResponseErrors => {
    // Set validation errors
    let validationErrors = {};
    try {
        validationErrors = responseBody.data?.errors || {};
        Object.keys(validationErrors).forEach((field: string) => {
            const finalKey = field.split('.');
            const finalKeyString = finalKey[0];
            validationErrors[finalKeyString] = Array.isArray(validationErrors[field])
                ? validationErrors[field].join(',')
                : validationErrors[field];
        });
    } catch (error) {
        validationErrors = {};
    }

    // Set error message
    let errorMessage = ERROR_MSG_CRITICAL;
    try {
        switch (responseBody.status) {
            case ERROR_CODE_NOT_VALIDATED:
                errorMessage = ERROR_MSG_VALIDATION;
                break;
            case ERROR_CODE_NOT_AUTHORIZED:
                errorMessage = ERROR_MSG_NOT_AUTHOIZED;
                break;
            default:
                errorMessage = responseBody.msg && responseBody.msg.message || ERROR_MSG_CRITICAL;
                break;
        }
    } catch (error) {
        errorMessage = ERROR_MSG_CRITICAL;
    }

    return {
        originalError: responseBody || null,
        statusText: responseBody?.statusText || 'ERROR',
        code: responseBody?.status || 0,
        message: errorMessage,
        validationErrors: validationErrors || {},
    };
};
