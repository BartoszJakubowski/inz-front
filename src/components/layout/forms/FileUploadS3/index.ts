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
    value?: FileUpload;
    onChange: (file: FileUpload) => any;
    style?: InputStyles;
    styles?: object;
    error?: string;
    disabled?: boolean;
    validationAction?: ValidationActions;
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;

    accept?: string;
    onPresign: (params: object) => Promise<any>;
}

export enum InputStyles {
    Primary = 'primary',
}

export interface NativeFile extends File {
    preview?: string;
}

export interface FileUpload {
    id: string;
    originalName: string;
    imageUrl: string;
    progress?: number;
}

Component.defaultProps = {
    value: null,
    style: InputStyles.Primary,
    styles: {},
    error: null,
    disabled: false,
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
    accept: 'image/*',
};

export default connect(Component);