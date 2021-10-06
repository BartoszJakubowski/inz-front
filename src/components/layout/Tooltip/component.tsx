import { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutTooltip: FunctionComponent<Props> = ({ name, text, reactTooltipProps, children }) => {
    return (
        <StyledComponent
            className="layout-tooltip"
        >
            <div data-tip data-for={name} className="tooltip-container">
                {children}
            </div>
            <ReactTooltip 
                id={name} 
                {...reactTooltipProps}
            >
                <div className="tooltip-text" >
                    {text}
                </div>
            </ReactTooltip>
        </StyledComponent>
    )
};

export default LayoutTooltip;