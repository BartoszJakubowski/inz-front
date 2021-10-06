import { ReactNode } from 'react';
import Component from './component';

export interface Props {
    children: ReactNode;
    className?: string;
    styles?: object;
}

Component.defaultProps = {
    children: null,
    className: '',
    styles: {},
};

export default Component;