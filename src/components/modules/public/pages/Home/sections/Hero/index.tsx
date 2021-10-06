import { ListProps as ButtonListProps } from 'components/layout/Button';

import Component from './component';

export interface Props {
    headline: string;
    buttons?: ButtonListProps[];
}

Component.defaultProps = {
    buttons: [],
};

export default Component;