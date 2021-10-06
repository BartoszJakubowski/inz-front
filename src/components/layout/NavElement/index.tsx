import Component from './component';

import { Props as ButtonProps } from 'components/layout/Button';

export interface Props {
    buttonProps: ButtonProps;
    elements?: ListProps[];
    scrollToId?: string;
}

export interface ListProps extends Props {
    key: string;
}

export default Component;