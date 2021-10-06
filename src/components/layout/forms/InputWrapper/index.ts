import { ReactNode } from 'react';
import Component from './component';

import { ColorStates } from 'types/states';

export interface Props {
    name: string;
    children?: ReactNode;
    label?: string;
    helper?: string;
    error?: string;
    validationAction?: ValidationActions;
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;
    required?: boolean;
}

export interface InputDecorator {
    visible?: boolean;
    state?: ColorStates;
    children?: ReactNode;
    loading?: boolean;
}

export enum ValidationActions {
    None = 'none',
    Decorator = 'decorator',
}

Component.defaultProps = {
    children: null,
    label: null,
    helper: null,
    error: null,
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
    required: false,
};

export default Component;