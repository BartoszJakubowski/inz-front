import { FunctionComponent } from 'react';
import Slider from 'react-slick';

import { Props } from './index';

import StyledComponent from './styles';

const LayoutSlick: FunctionComponent<Props> = ({ children, sliderProps }) => ((
    <StyledComponent className="layout-slick">
        <Slider 
            adaptiveHeight={false}
            arrows={true}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            {...sliderProps}
        >
            {children}
        </Slider>
    </StyledComponent>
));

export default LayoutSlick;