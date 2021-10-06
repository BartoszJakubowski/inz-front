import qs from 'qs';

import { isJsonString } from 'utils/string';

export function parseQueryToObject(queryString = '', jsonToValue = false): any {
    if(!queryString.includes('?')) {
        queryString = '';
    }

    const queryStringArray = queryString.split('?');
    queryString = queryStringArray[queryStringArray.length - 1];

    const queryObject = qs.parse(queryString.replace('?', ''));

    if (jsonToValue) {
        Object.keys(queryObject).forEach(key => {
            try {
                if (isJsonString(queryObject[key])) {
                    queryObject[key] = JSON.parse(queryObject[key]).value;
                }
            } catch (error) {
                // Ignore
            }
        });
    }

    return queryObject;
}

export function parseToQueryString(url: string, params = {}): string {
    const urlParts = url.split('?');
    const urlPath = urlParts[0];
    const urlParams = typeof urlParts[1] !== 'undefined' ? qs.parse(urlParts[1]) : {};

    params = {
        ...urlParams,
        ...params,
    };
    return `${urlPath}?${qs.stringify(params)}`
        .replace(/\?+$/, ''); // Replace all "?" chars at the of string
}

export function filterParams(params = {}, filter = []): any {
    const filteredParams = {};
    Object.keys(params).forEach(paramName => {
        if (!filter.includes(paramName)) {
            filteredParams[paramName] = params[paramName];
        }
    });

    return filteredParams;
}

