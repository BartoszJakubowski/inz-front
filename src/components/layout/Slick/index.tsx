import { ReactNode } from 'react';
import { Settings } from 'react-slick';

import Component from './component';

export interface Props {
    children?: ReactNode
    sliderProps?: Settings;
}

Component.defaultProps = {
    children: null,
    sliderProps: {},
};

export default Component;