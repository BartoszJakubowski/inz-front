import { ReactNode } from 'react';
import Component from './component';

export interface Props {
    icon: ReactNode;
    label: string;
    onClick?: Function;
    copy?: {
        enabled: boolean;
        content: string;
    }
    href?: {
        pathname: string;
        query?: {
            [key: string]: string
        };
    };
    confirm?: {
        enabled: boolean;
        message?: string;
    };
}

Component.defaultProps = {
    onClick: null,
    href: null,
    copy: null,

};
export default Component;