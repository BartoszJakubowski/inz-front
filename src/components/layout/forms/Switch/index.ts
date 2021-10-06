import { connect, FormikContextType } from 'formik';
import Component from './component';

import {
    Props as InputWrapperProps,
    ValidationActions,
} from 'components/layout/forms/InputWrapper';

export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    value?: boolean;
    onChange: (checked: boolean) => any;
    style?: InputStyles;
    styles?: object;
    error?: string;
    disabled?: boolean;
    validationAction?: ValidationActions
}

export enum InputStyles {
    Primary = 'primary',
}

Component.defaultProps = {
    value: false,
    style: InputStyles.Primary,
    styles: {},
    error: null,
    disabled: false,
    validationAction: ValidationActions.None,
};

export default connect(Component);