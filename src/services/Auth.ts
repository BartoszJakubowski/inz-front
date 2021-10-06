import { getProvider } from 'services/Cookies';
import { COOKIE_AUTH_TOKEN } from 'consts/cookies';

export function createSession({ authToken }: { authToken: string }): any {
    getProvider().set(COOKIE_AUTH_TOKEN, authToken);
    return getSession();
}

export function getSession(): any {
    if (!validateSession()) {
        return null;
    }

    return {
        authToken: getProvider().get(COOKIE_AUTH_TOKEN),
    };
}

export function validateSession(): any {
    return Boolean(
        getProvider().get(COOKIE_AUTH_TOKEN)
    );
}

export function destroySession(): any {
    return getProvider().remove(COOKIE_AUTH_TOKEN);
}
