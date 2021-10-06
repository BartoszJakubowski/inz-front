import { FunctionComponent } from 'react';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutLogo: FunctionComponent<Props> = ({ }) => ((
    <StyledComponent
        className="layout-logo"
    >
        <div className="logo-wrapper">
            <a href="/" className="logo">
                <span className="soccer">Soccer</span><span className="score">Scores</span>
            </a>
        </div>
    </StyledComponent>
));

export default LayoutLogo;