import { ReactNode } from 'react';

import Component from './component';

export interface Props {
    children: ReactNode;
}

Component.defaultProps = {
    children: null,
};

export default Component;