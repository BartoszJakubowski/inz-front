import { connect, FormikContextType } from 'formik';
import Component from './component';

import { Option } from 'types/options';

import { Props as InputWrapperProps } from 'components/layout/forms/InputWrapper';

export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    placeholder?: string;
    value?: string | number | Option<any>;
    onChange: (option: Option<any>) => any;
    disabled?: boolean;
    style?: InputStyles;
    styles?: object;
    error?: string;
    selectProps?: object;
}

export enum InputStyles {
    Primary = 'primary',
}

Component.defaultProps = {
    placeholder: null,
    value: '',
    error: null,
    disabled: false,
    style: InputStyles.Primary,
    styles: {},
    selectProps: {},
}

export default connect(Component);