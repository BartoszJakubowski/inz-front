import { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutFormsInpuRowl: FunctionComponent<Props> = ({ children, className }) => {
    return (
        <StyledComponent
            className={classnames(
                'layout-forms-input-row',
                className,
            )}
        >
            {children}
        </StyledComponent>
    );
};

export default LayoutFormsInpuRowl;