import Component from './component';

export interface Props {}
export enum States {
    Online = 'online',
    Offline = 'offline',
}

Component.defaultProps = {};

export default Component;