//@ts-ignore
import { FunctionComponent } from 'react';
import classnames from 'classnames';

import StyledComponent from './styles';
import { Props } from './index';

const LayoutSpinner: FunctionComponent<Props> = ({ text, color, position, size }) => ((
    <StyledComponent
        className={classnames(
            'layout-spinner',
            'animated',
            'fadeIn',
            [`color-${color}`],
            [`position-${position}`],
            [`size-${size}`]
        )}
    >
        <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
        {text ? <p className="spinner-text">{text}</p> : null}
    </StyledComponent>
));

export default LayoutSpinner;