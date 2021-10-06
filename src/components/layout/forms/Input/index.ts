import { ChangeEvent } from 'react';
import { connect, FormikContextType } from 'formik';
import Component from './component';

import {
    Props as InputWrapperProps,
    InputDecorator,
    ValidationActions,
} from 'components/layout/forms/InputWrapper';


export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => any;
    style?: InputStyles;
    styles?: object;
    error?: string;
    disabled?: boolean;
    validationAction?: ValidationActions;
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;
    spinButtons?: InputSpinButtons;
    inputProps?: {
        min?: number;
        max?: number;
    }
    required?: boolean;
}

export interface InputSpinButtons {
    visible: boolean;
    onIncrement?: (nextValue: number) => void;
    onDecrement?: (nextValue: number) => void;
}

export enum InputStyles {
    Primary = 'primary',
    Light = 'light',
}

Component.defaultProps = {
    type: 'text',
    placeholder: null,
    value: '',
    style: InputStyles.Primary,
    styles: {},
    error: null,
    disabled: false,
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
    inputProps: {},
    required: false,
};

export default connect(Component);