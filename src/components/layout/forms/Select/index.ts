import { connect, FormikContextType } from 'formik';
import Component from './component';

import { Option } from 'types/options';

import {
    Props as InputWrapperProps,
    InputDecorator,
    ValidationActions,
} from 'components/layout/forms/InputWrapper';

export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    placeholder?: string;
    value?: string | number | Option<any>;
    onChange: (option: Option<any>) => any;
    disabled?: boolean;
    style?: InputStyles;
    styles?: object;
    options: Option<any>[];
    error?: string;
    validationAction?: ValidationActions
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;
}

export enum InputStyles {
    Primary = 'primary',
    LightTransparent = 'light-transparent',
}

Component.defaultProps = {
    placeholder: null,
    value: '',
    style: InputStyles.Primary,
    styles: {},
    error: null,
    disabled: false,
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
};

export default connect(Component);