import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children: ReactNode;
    required?: boolean;
}

Component.defaultProps = {
    children: null,
    required: false,
};

export default Component;