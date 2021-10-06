import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

export default styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: stretch;
    justify-content: center;

    .layout-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        margin-bottom: 3.5em;

        .copy {
            color: white;
            text-align: center;
            bottom: 0;
            width: 98%;

            .headline {
                font-size: 3.8em;
                font-weight: 600;

                .highlighted {
                    color: #00AEEF;
                }
            }

            .subheadline {
                font-size: 1em;
                font-weight: 400;
                margin-bottom: 0.8em;
            }
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 2em;
        }

        .arrow-down {
            font-size: 2em;
            margin-top: 1em;

            .arrow-down-button {
                color: white;
                cursor: pointer;
            }
        }
    }

    .abs-image {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(-25%, 40%);
    }

    @media all and (max-width: ${variables.tabletL}) {
        .layout-container {
            align-items: center;
            text-align: center;
        }

        .abs-image {
            display: none;
        }
    }

    @media all and (max-width: ${variables.mobileL}) {
        .copy {
            font-size: 90%;
        }
    }

    @media all and (max-width: ${variables.mobileM}) {
        .copy {
            width: 80% !important;

            .subheadline {
                font-size: 2.2em !important;
            }
        }

        .buttons {
            font-size: 120%;
        }
    }

    @media all and (max-width: ${variables.mobileS}) {
        .buttons {
            flex-direction: column;

            > * {
                margin-right: 0;
                margin-bottom: 1em;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }
`;