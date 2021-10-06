import rollbar, { init as initRollbar } from 'services/Rollbar';

/* eslint-disable no-console */
export default {
    init (payload = {}): any {
        initRollbar(payload);
    },
    log (data = {}, payload = {}): any {
        this.logConsole('log', data, payload);
    },
    info (data = {}, payload = {}): any {
        this.logConsole('info', data, payload);
        this.logRollbar('info', data, payload);
    },
    debug (data = {}, payload = {}): any {
        this.logConsole('debug', data, payload);
        this.logRollbar('debug', data, payload);
    },
    warning (data = {}, payload = {}): any {
        this.logConsole('error', data, payload);
        this.logRollbar('warning', data, payload);
    },
    error (data = {}, payload = {}): any {
        this.logConsole('error', data, payload);
        this.logRollbar('error', data, payload);
    },
    logConsole (level: string, data = {}, payload = {}): any {
        if (process.env.APP_ENV === 'development') {
            console[level](data, payload);
        }
    },
    logRollbar (level: string, data = {}, payload = {}): any {
        if (process.env.APP_ENV !== 'development') {
            rollbar[level](data, payload);
        }
    },
};
