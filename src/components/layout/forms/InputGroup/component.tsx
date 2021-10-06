import { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutFormsInpuGroup: FunctionComponent<Props> = ({ children, className, styles }) => {
    return (
        <StyledComponent
            className={classnames(
                'layout-forms-input-group',
                className,
            )}
            style={styles}
        >
            {children}
        </StyledComponent>
    );
};

export default LayoutFormsInpuGroup;