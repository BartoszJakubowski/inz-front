import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default styled.div`
    .slick-slider {
        position: relative;
        z-index: 9;

        .slick-arrow {
            display: block;
            width: 9em;
            height: 10em;
            background: white;
            box-shadow: 0 0 1em 1em rgb(0 0 0 / 30%);
            padding: 1em;
            z-index: 999;
            transform: translate(0%, -50%);
            

            &.slick-prev {
                right: 103%;
                left: auto;
            }
            &.slick-next {
                right: auto;
                left: 96%;
            }

            &:before {
                width: 8em;
                height: 8em;
                background: white;
                box-shadow: 0 0 1.5em 0.2em rgb(0 0 0 / 10%);
                padding: 1.1em 1em 1em 1em;
                z-index: 9999;
                position: relative;
                border-radius: 36em;
                color: #CCC;
            }

            &:hover {
                &:before {
                    color: #00AEEF;
                }
            }
        }

        .slick-dots {
            bottom: -3em;
            
            > li {
                button {
                    &:before {
                        font-size: 12px;
                        color: #B5EBFF;
                    }
                }
                &.slick-active {
                    button {
                        &:before {
                            color: #00AEEF;
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
        .slick-slider {
            .slick-arrow {
                display: none !important;
            }
        }
    }
`;