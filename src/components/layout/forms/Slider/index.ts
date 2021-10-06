import { ChangeEvent } from 'react';
import { connect, FormikContextType } from 'formik';
import { ReactSliderProps } from 'react-slider';

import Component from './component';

import {
    Props as InputWrapperProps,
    InputDecorator,
    ValidationActions,
} from 'components/layout/forms/InputWrapper';


export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    value?: number | number[];
    onChange: (value: number | number[], index: number) => void;
    style?: InputStyles;
    styles?: object;
    error?: string;
    disabled?: boolean;
    validationAction?: ValidationActions;
    decoratorLeft?: InputDecorator;
    decoratorRight?: InputDecorator;
    sliderProps?: ReactSliderProps;
    legend?: {
        enabled: boolean;
        min: number;
        max: number;
        unit: string;
    }
}

export enum InputStyles {
    Primary = 'primary',
}

Component.defaultProps = {
    value: 0,
    style: InputStyles.Primary,
    styles: {},
    error: null,
    disabled: false,
    validationAction: ValidationActions.Decorator,
    decoratorLeft: null,
    decoratorRight: null,
    sliderProps: {},
    legend: null,
};

export default connect(Component);