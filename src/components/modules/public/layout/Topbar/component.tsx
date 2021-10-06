import { FunctionComponent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';
import LayoutContainer from 'components/layout/LayoutContainer';
import Logo from 'components/layout/Logo';
import NavSection from 'components/layout/NavSection';

const PublicLayoutTopbar: FunctionComponent<Props> = ({ main, side }) => {
    const [isNavExpanded, setIsNavExpanded]: [boolean, Function] = useState(false);

    return (
        <StyledComponent 
            className={classnames(
                'public-layout-topbar',
                { expanded: isNavExpanded }
            )}
        >
            <div className="main">
                <LayoutContainer>
                    <div className="col col-left">
                        <Logo/>
                        <NavSection 
                            {...main}
                        />
                    </div>
                    <div className="col col-right">
                        <NavSection 
                            {...side}
                        />
                    </div>
                </LayoutContainer>
            </div>
            <div className="mobile-nav">
                <div className="nav-controls">
                    <Logo/>
                    <a 
                        className="nav-control nav-control-close"
                        onClick={() => setIsNavExpanded(false)}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                </div>
                <div className="nav-body">
                    <div className="row-top">
                        <NavSection {...main} />
                    </div>
                    <div className="row-bottom">
                        <a className="login-button">
                            Logowanie  
                        </a>
                        <NavSection {...side} />
                    </div>
                </div>
            </div>
        </StyledComponent>
    )
};

export default PublicLayoutTopbar;