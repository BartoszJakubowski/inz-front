export interface ApiResponseBody {
    data: {
        errors: {
            [field: string]: string;
        },
    };
    msg: {
        message: string;
    };
    status: number;
    statusText: string;
}

export interface ApiResponseErrors {
    originalError?: ApiResponseBody;
    statusText: string;
    code: number;
    message: string,
    validationErrors: {
        [field: string]: string;
    },
}
