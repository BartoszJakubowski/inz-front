import { connect, FormikContextType } from 'formik';
import Component from './component';

import { Props as InputWrapperProps } from 'components/layout/forms/InputWrapper';

export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    placeholder?: string;
    value?: string | number | Option;
    onChange: (option: Option) => any;
    style?: InputStyles;
    styles?: object;
    error?: string;
    disabled?: boolean;

    defaultOptions?: Option[];
    onLoad: (input: string) => Promise<any>;
    loadTimestamp?: number;
    onMapResponse: (response: object) => any[];
    onMapOption: (element: any) => any;
    onSetOptions?: (options: Option[]) => Option[];
    selectProps?: object;
}

export interface State {
    preloadedOptions: Option[];
}

export interface Option {
    label: string;
    value: string;
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
    loadTimestamp: null,
    onSetOptions: (options) => options,
    selectProps: {},
}


export default connect(Component);