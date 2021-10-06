import Component from './component';

import { Props as NavElementProps } from 'components/layout/NavElement';

export interface Props {
    elements?: NavElementElement[];
}

export interface NavElementElement extends NavElementProps {
    key: string;
}

Component.defaultProps = {
    elements: [],
};
export default Component;