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
    style?: InputStyles;
    styles?: object;
    error?: string;
    disabled?: boolean;

    defaultOptions?: Option<any>[];
    onLoad: (input: string) => Promise<any>;
    onMapResponse: (response: object) => any[];
    onMapOption: (element: any) => any;
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

    defaultOptions: [],
    selectProps: {},
}

export default connect(Component);