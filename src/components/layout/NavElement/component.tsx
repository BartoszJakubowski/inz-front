import React, { FunctionComponent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';
import Button, { ButtonElements, ButtonStyles, ButtonIconTypes } from 'components/layout/Button';
  
const LayoutNavElement: FunctionComponent<Props> = ({ buttonProps, elements, scrollToId }) => {
    const [element, setElement]: [any, Function] = useState(null);
    const hasSubElements = Array.isArray(elements) && elements.length > 0;

    useEffect(() => {
        setElement(document.querySelector(scrollToId));
    });

    let scrollTo = undefined;
    if (element) {
        scrollTo = element.offsetTop;
    }

    return (
        <StyledComponent 
            className={classnames(
                'layout-nav-element',
                { 'with-sub-elements': hasSubElements }
            )}
        >
            <Button 
                element={ButtonElements.Anchor}
                style={ButtonStyles.None}
                icon={{
                    type: ButtonIconTypes.Element,
                    value: hasSubElements && (<FontAwesomeIcon icon={faChevronDown} />),
                }}
                {...buttonProps}
                onClick={() => scrollToId ? window.scrollTo(0, scrollTo) : null}
            />
            {hasSubElements && (
                <div className="sub-nav-elements-container">
                    <div className="sub-nav-elements">
                        {elements.map(element => (
                            <LayoutNavElement 
                                key={element.key}
                                {...element}
                            />
                        ))}
                    </div>
                </div>
            )}
        </StyledComponent>
    )
};

export default LayoutNavElement;