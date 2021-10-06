import { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';
import NavElement from 'components/layout/NavElement';

const LayoutNavSection: FunctionComponent<Props> = ({ elements }) => {
    return (
        <StyledComponent
            className={classnames(
                'layout-nav-section',
            )}
        >
            {elements.map(element => (
                <NavElement 
                    key={element.key}
                    {...element}
                />
            ))}
        </StyledComponent>
    )
};

export default LayoutNavSection;