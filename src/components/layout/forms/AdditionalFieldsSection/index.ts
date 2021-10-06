import { ReactNode } from 'react';
import Component from './component';

export interface Props {
    children?: ReactNode;
    initialExpandState?: boolean;
    expandLabel?: string;
    unexpandLabel?: string;
    onToggleExpand?: (state: boolean) => any;
}

Component.defaultProps = {
    children: null,
    initialExpandState: false,
    expandLabel: 'Pokaż pola dodatkowe',
    unexpandLabel: 'Ukryj pola dodatkowe',
    onToggleExpand: () => null,
};

export default Component;