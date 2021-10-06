import styled from '@emotion/styled';

export default styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .button {
        position: relative;
        z-index: 2;
        font-size: 1em;
        line-height: 1.5em;
        text-decoration: none;
        cursor: pointer;

        border-radius: .6em;
        border: none;

        &.disabled {
            background-color: #909090 !important;
        };
    }

    a {
        text-decoration: none;
        width: 100%;
        text-align: center;
    }

    span {
        font-size: 1em;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
    }

    .button-icon {
        margin-left: .5em;

        .button-icon-image {
            width: .7em;
        }
    }

    /* Layouts */
    &.layout-default {
    }

    &.layout-topbar-button {
        .button {
            height: 2.75em;
            width: 10.9em;
        }
    }

    &.layout-small {
        button {
            height: 2.75em;
            width: 10em;
        }
    }

    &.layout-medium {
        .button {
            height: 2.75em;
            width: 16em;
        }
    }

    &.layout-wide {
        .button {
            height: 2.75em;
            width: 38em;
        }
    }
    
    &.layout-block {
        width: 100%;

        .button {
            height: 2.75em;
            width: 100%;
        }
    }

    &.layout-language-button {
        .button {
            background-color: transparent;
            display: flex;
            
            .button-icon {
                padding-top: .1em;
            }
        }
    }

    &.layout-medium-width {
        width: 30%;

        .button {
            height: 2.75em;
            width: 100%;
        }
    }

    /* Sizes */
    &.size-small {
        .button {
            font-size: .75em;
        }
    }
    &.size-medium {
        .button {
            font-size: .9em;
        }
    }
    &.size-large {
        .button {
            font-size: 1.15em;
        }
    }

    /* Styles */
    &.style-primary {
        &.variant-primary {
            .button {
                background-color: orange;
                color: black;
            }

            .button-shadow {
                background: #00AEEF;
            }

            &:hover {
                .button {
                    background-color: #dd8f00;
                }
            }
        }
        &.variant-outline {
            .button {
                background-color: transparent;
                color: #00AEEF;
                border: .01em solid #00AEEF;
                box-shadow: none;
            }

            .button-shadow {
                background: #00AEEF;
            }

            &:hover {
                .button {
                    background-color: #00AEEF;
                    color: white;
                }
            }
        }
    }

    &.style-red-filled {
        .button {
            background-color: #FC2B1B;
            color: white;
            border-radius: 2em;

            &:hover {
                color: #FC2B1B;
                background-color: white;
                border: .2em solid #FC2B1B;
            }
        }
    }

    &.style-light-transparent {
        .button {
            background-color: transparent;
            border: .2em solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 2em;

            &:hover {
                background-color: white;
                
                .button-content {
                    color: black;
                }
            }

            .button-content {
                color: white;
            }
        }
    }

    &.style-light-filled {
        .button {
            background-color: #FFFFFF;
            border-radius: 2.5em;
            
            .button-content {
                font-weight: 600 !important;
                color: #FC2B1B;
            }
        }
    }

    &.style-none {
        .button {
            background-color: transparent;
            box-shadow: none;
            padding: 0;
        }
    }

    &.style-dark-transparent {
        .button {
            background-color: transparent;
            border: .1em solid black;
            border-radius: .2em;

            .button-content {
                color: black;
            }

            &:hover {
                background-color: white;
                border-color: #FC2B1B;
                border-width: .2em;

                .button-content {
                    color: #FC2B1B;
                }
            }

        }

        &.selected {
            .button {
                background-color: white;
                border-color: #FC2B1B;
                border-width: .2em;
                
                .button-content {
                    color: #FC2B1B;
                }
            }
        }
    }

    &.style-red-transparent {
        .button {
            background-color: transparent;
            border: .2em solid #FC2B1B;
            border-radius: 2em;

            .button-content {
                color: #FC2B1B;
            }

            &:hover {
                background-color: #FC2B1B;

                .button-content {
                    color: white;
                }
            }
        }
    }

    &.style-gradient {
        background-image: linear-gradient(45deg, #FC2B1B 0%, #961910 100%);
        box-shadow: 0px 0px 5px #FF003166;
        color: #FFFFFF;
        border-radius: .2em;
        font-weight: 500;
        border: 1px solid #DF3846;
        transition: all .3s ease-in-out;
        padding: 1em 3em;
        text-transform: uppercase;
        cursor: pointer;

        .button {
            background: transparent;
            color: white;
            text-transform: uppercase;
            
            .button-content {
                font-size: 1.2em;
                font-weight: 300;
            }
        }

        &:hover {
            box-shadow: 0px -.3em .1em rgba(0, 0, 0, .3) inset;
        }

        &:active {
            box-shadow: 0 .3em .1em rgba(0, 0, 0, 0.3) inset;
        }

        &.disabled {
            border: 1px solid #666666;
            color: #c29191;
            cursor: default;

            .button {
                background: transparent !important;
                color: white !important;
                font-size: 1.2em !important;
                font-weight: 300 !important;
                text-transform: uppercase !important;
                
                .button-content {
                    cursor: default;
                    color: #c29191;
                }
            }

            &:hover {
                box-shadow: 0px 0px 5px #FF003166;
            }
        }
    }

    &.style-gradient-dark {
        .button {
            background: transparent linear-gradient(45deg, #FC2B1B 0%, #961910 100%) 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 5px #FF003166;
            color: white;
            border-radius: .2em;
            font-weight: 600;
            border: 1px solid #FF0031;
            transition: all .3s ease-in-out;
            
        }
    }

    /* Modificators */
    &.disabled {
        .button {
            background-color: #666666 !important;
            color: white !important;
        }
    }

    &.shadow {
        .button-shadow {
            display: block;
        }
    }
`;
