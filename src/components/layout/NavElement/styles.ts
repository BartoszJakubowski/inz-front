import styled from '@emotion/styled';

export default styled.div`
    position: relative;
    white-space: nowrap;

    .layout-button.element-anchor {
        .button {
            color: white;
            transition: .2s color ease-in-out;

            .button-content {
                font-weight: 500;
                font-size: 1.125em;
            }
        }

        a {
            text-align: left;
        }
    }

    &.with-sub-elements {
        .sub-nav-elements-container {
            padding-top: .5em;
            display: none;
            opacity: 0;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            transition: .3s opacity ease-in-out;
            
            .sub-nav-elements {
                background: white;
                border-radius: .3em;
                overflow: hidden;

                .layout-nav-element {
                    width: 100%;

                    .layout-button.element-anchor {
                        .button {
                            color: #121212;
                            background-color: transparent !important;

                            .button-content {
                                &:hover {
                                    color: black !important; 
                                }
                            }
                        }
                    }

                    &:hover {
                        background: #EEEEEE;
                    }

                    &:first-of-type {
                        border-top: none;
                    }
                }
            }

            &:hover {
                opacity: 1;
                display: block;
            }
        }

        &:hover {
            .sub-nav-elements-container {
                opacity: 1;
                display: block;
            }
        }
    }
`;