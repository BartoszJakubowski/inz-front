import { isHttps } from 'utils/url';
import Cookies from 'universal-cookie';

export function parseValue(value: string): any {
    return typeof value === 'undefined' || value === 'undefined' || value === 'null' ? null : value;
}

export function getProvider(): any {
    const core = new Cookies('');

    return {
        get: name => {
            return parseValue(core.get(name));
        },
        set: (name, value, options = {}) => {
            return core.set(name, value, { ...getDefaultOptions(), ...parseOptions(options) });
        },
        remove: name => {
            return core.remove(name, { path: getDefaultOptions().path });
        },
    };
}

function getDefaultOptions():any {
    return {
        path: '/',
        expires: getDefaultExpireDate(),
        secure: isHttps(),
    };
}

function parseOptions(options) {
    return {
        ...options,
        expires: options.session ?
            getSessionExpireDate()
            :
            options.expires ? options.expires : getDefaultExpireDate(),
    };
}

function getDefaultExpireDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return new Date(year + 99, month, day);
}

function getSessionExpireDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return new Date(year, month, day - 1);
}
