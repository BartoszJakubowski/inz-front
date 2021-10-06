import { FunctionComponent } from 'react';
import classnames from 'classnames';

import StyledComponent from './styles';

import { Props } from './index';

const LayoutLayoutContainer: FunctionComponent<Props> = ({ children, size, className }) => ((
    <StyledComponent 
        className={classnames(
            'layout-container',
            `size-${size}`,
            className
        )}
    >
        {children}
    </StyledComponent>
));

export default LayoutLayoutContainer;