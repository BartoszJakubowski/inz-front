import { DIACRITICS_MAP } from 'consts/strings';

import { parseToQueryString } from 'utils/querystring';
import { getKeyValyeByString } from 'utils/object';

export function shorten(string: string, length: number, addDots = false): string {
    if (!string || typeof string !== 'string') {
        return '';
    }

    let newString = string.substring(0, length);
    if (string.length > length && addDots) newString = newString + '...';

    return newString;
}

export function withVariables(string: string, variables = {}, queryObject = {}, hash = ''): string {
    if (!string || typeof string !== 'string') {
        return '';
    }

    Object.keys(variables)
        .forEach(variableKey => {
            const pattern = ':variableKey'.replace('variableKey', variableKey);

            string = string.replace(pattern, variables[variableKey]);
        });

    Object.keys(variables)
        .forEach(variableKey => {
            const pattern = '[variableKey]'.replace('variableKey', variableKey);

            string = string.replace(pattern, variables[variableKey]);
        });

    string = string
        .replace('(', '')
        .replace(')', '');

    return parseToQueryString(string, queryObject) + hash;
}


export function isJsonString(jsonString: string): boolean {
    try {
        const o = JSON.parse(jsonString);
        if (o && typeof o === 'object') {
            return o;
        }
    }
    catch (e) {
        // Ignore
    }

    return false;
}

export function slugify(text: string): string {
    text = (text || '')
        .toString()
        .toLowerCase();
    text = removeDiacritics(text);

    return text
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')       // Remove all non-word chars
        .replace(/--+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

export function removeDiacritics(text: string): string {
    for (let i = 0; i < DIACRITICS_MAP.length; i++) {
        text = text.replace(DIACRITICS_MAP[i].letters, DIACRITICS_MAP[i].base);
    }

    return text;
}

export function replaceVariables(string: string, values: object): string {
    const regexp = new RegExp('{{.+?}}', 'g');
    const matches = string.match(regexp);

    if(!Array.isArray(matches)) {
        return string;
    }

    matches.forEach(match => {
        let path = match.match(/\{\{(.*)\}\}/g)[0];
        path = path
            .replace('{','')
            .replace('{','')
            .replace('}','')
            .replace('}','');

        let value = getKeyValyeByString(values, path);

        if(typeof value === 'undefined') {
            console.error(`Can't find value for variable ${match} at path ${path}`);
            value = '';
        }

        string = string.replace(match, value)
    });

    return string;
}