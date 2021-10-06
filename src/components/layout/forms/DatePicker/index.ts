import { Moment } from 'moment';
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
    value?: Moment;
    onChange: (date?: Moment) => any;
    disabled?: boolean;
    style?: InputStyles;
    styles?: object;
    error?: string;
    datePickerProps?: any;
    validationAction?: ValidationActions
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;
}

export enum InputStyles {
    Primary = 'primary',
}

Component.defaultProps = {
    placeholder: null,
    value: null,
    style: InputStyles.Primary,
    styles: {},
    error: null,
    disabled: false,
    datePickerProps: {},
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
};

export default connect(Component);