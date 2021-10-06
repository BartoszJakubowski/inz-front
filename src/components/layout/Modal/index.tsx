import { ReactNode } from 'react';
import Component from './component';

export interface Props {
    title?: string;
    chidren?: ReactNode;
    onClose: () => any;
}

Component.defaultProps = {
    title: null,
    chidren: null,
};

export default Component;