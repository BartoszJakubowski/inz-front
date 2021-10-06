import { isBrowser } from 'utils/browser';

export function isHttps(): boolean {
    return isBrowser() && window.location.protocol === 'https' ? true : false;
}
