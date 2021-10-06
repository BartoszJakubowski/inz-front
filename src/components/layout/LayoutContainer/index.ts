import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children?: ReactNode;
    size?: Sizes;
    className?: string;
}

export enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

Component.defaultProps = {
    children: null,
    size: Sizes.Medium,
    className: null,
};
export default Component;