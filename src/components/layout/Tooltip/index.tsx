import { ReactNode } from 'react';
import { TooltipProps, Place, Type, Effect } from 'react-tooltip';
import Component from './component';

export interface Props {
    name: string;
    children?: ReactNode;
    text: ReactNode | string;
    place?: Place;
    type?: Type;
    effect? : Effect;
    reactTooltipProps?: TooltipProps
}

Component.defaultProps = {
    children: null,
    place: 'top',
    type: 'info',
    effect: 'solid',
    reactTooltipProps: {},
};

export default Component;