import getConfig from 'next/config';
import Rollbar from 'rollbar';

let instance;
export default instance ? instance : init();
export function init(payload: object = {}): any {
    if (instance) {
        return instance;
    } else {
        const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

        return instance = new Rollbar({
            accessToken: process.browser
                ? publicRuntimeConfig.ROLLBAR_CLIENT_KEY
                : serverRuntimeConfig.ROLLBAR_SERVER_KEY,
            environment: process.env.APP_ENV,
            autoInstrument: { log: false },
            verbose: process.env.APP_ENV === 'development',
            payload: {
                ...payload,
            },
        });
    }
}
