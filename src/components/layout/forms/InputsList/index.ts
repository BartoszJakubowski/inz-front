import { connect, FormikContextType } from 'formik';
import { ReactNode } from 'react';

import Component from './component';

import { Props as InputWrapperProps } from 'components/layout/forms/InputWrapper';
import { Props as ControlProps } from 'components/layout/ListDetailedElementControl';

export enum Layouts {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
    Fluid = 'fluid',
}

export interface Props extends InputWrapperProps {
    formik?: FormikContextType<any>;
    name: string;
    value?: any[];
    onChange: (values: any[]) => any;
    error?: string;
    layout?: Layouts;
    elements: Element[];
    onMapControls?: (rowValue: any, rowIndex: number, onChange: Function) => Control[];
    defaultValues?: any;
    canCreate?: boolean;
    canRemove?: boolean;
}

export interface Element {
    name: string;
    visible?: boolean;
    onMapElement: (
        inputName: string,
        inputIndex: number,
        onChange: (name: string, value: any, index: number) => any,
        value: any,
    ) => ReactNode,
}

export interface Control  extends ControlProps{
    key: string;   
    visible?: boolean;
}

Component.defaultProps = {
    value: [],
    error: null,
    layout: Layouts.Horizontal,
    onMapControls: () => [],
    defaultValues: {},
    canCreate: true,
    canRemove: true,
};

export default connect(Component);