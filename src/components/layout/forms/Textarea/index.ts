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
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    onChange: (event: ChangeEvent<any>) => any;
    style?: InputStyles;
    styles?: object;
    error?: string;
    validationAction?: ValidationActions
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;
}

export enum InputStyles {
    Primary = 'primary',
}

Component.defaultProps = {
    placeholder: null,
    value: '',
    disabled: false,
    style: InputStyles.Primary,
    styles: {},
    error: null,
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
};

export default connect(Component);