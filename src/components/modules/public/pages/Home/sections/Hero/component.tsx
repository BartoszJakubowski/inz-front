import { FunctionComponent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import { Props } from './index';

import StyledComponent from './styles';
import LayoutContainer, { Sizes } from 'components/layout/LayoutContainer';
import Button from 'components/layout/Button';

const PublicPageHomeSectionHero: FunctionComponent<Props> = ({ headline, buttons }) => {

    console.log(headline)
    return (
        <>
            <StyledComponent
                className={classnames(
                    'public-page-home-section-hero',
                )}
            >
                <LayoutContainer size={Sizes.Large}>
                    <h3 className="headline">{headline}</h3>
                </LayoutContainer>
            </StyledComponent>
        </>
    )
};

export default PublicPageHomeSectionHero;