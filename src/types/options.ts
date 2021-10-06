import { ColorStates } from 'types/states';

export interface Option<Type> {
    label: string;
    value: Type;
    key?: string;
    state?: ColorStates;
    data?: any;
}