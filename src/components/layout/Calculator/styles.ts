import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .col {
        width: 50%;
        position: relative;

        &.col-left {
            margin-right: 3em;
        }
        &.col-right {}
    }

    .range-switch-controls {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .range-switch-control {
            position: relative;
            z-index: 1;

            .button {
                box-shadow: none;
                font-size: .9em;
                padding: .8em 2.5em;
            }

            &.active {
                position: relative;
                z-index: 2;
            }

            &.unactive {
                .button {
                    border: .01em solid #B5EBFF;
                    color: #00AEEF;
                }

                &.range-switch-control-month {
                    .button {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        padding-right: 3em;
                        margin-right: -1em;
                    }
                }

                &.range-switch-control-hours {
                    .button {
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                        padding-left: 3em;
                        margin-left: -1em;
                    }
                }
            }
        }
    }

    .calculator-sections {
        margin-top: 2em;

        .calculator-section {
            background: white;
            border-radius: .5em;
            padding: 2em;
            margin-bottom: 2em;
            
            .calculator-section-title {
                color: #121212;
                font-weight: 600;
                font-size: 2em;
            }
            .calculator-section-subsections {
                margin-top: 2em;

                .calculator-section-subsection {
                    margin-bottom: 2em;

                    .calculator-section-subsection-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .calculator-section-subsection-header-title {
                            color: #121212;
                            font-weight: 600;
                            font-size: 1.3em;
                        }
                        .calculator-section-subsection-header-price-input {
                            width: 7em;

                            .layout-forms-input {
                                .layout-forms-input-wrapper  {
                                    .internal-wrapper {
                                        border: .01em solid #B5EBFF;

                                        .input-body {
                                            input {
                                                font-weight: 600;
                                                color: #00AEEF;
                                                text-align: center;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .calculator-section-subsection-slider {}

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }

    .calculator-summary {
        background: white;
        border-radius: .5em;
        padding: 2em;
        position: relative;
        z-index: 2;

        .calculator-summary-body {
            .calculator-summary-title {
                color: #121212;
                font-weight: 600;
                font-size: 2em;
                margin-bottom: 1em;
            }

            .calculator-summary-body {
                margin-top: 2em;
            }
        }

        .calculator-summary-checkout {
            border-top: .01em solid #B5EBFF;
            margin-top: 3em;
            padding-top: 3em;

            .calculator-summary-checkout-price {
                text-align: center;
                font-size: 2.5em;
                font-weight: 600;
                color: #00AEEF;
                line-height: 90%;

                .calculator-summary-checkout-price-value {
                    font-size: 2em;
                    line-height: 90%;
                }
            }
            .calculator-summary-checkout-controls {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 3em;

                .calculator-summary-checkout-control {
                    margin-right: 1em;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }
        }

        .calculator-summary-block {
            margin-bottom: 2em;

            .calculator-summary-block-title {
                color: #00AEEF;
                font-weight: 100;
                font-size: 1em;
                text-transform: uppercase;
                margin-bottom: .7em;
            }
            .calculator-summary-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: .7em;
                
                .calculator-summary-col {
                    color: #121212;
                    font-weight: 100;
                    font-size: 1em;

                    &.calculator-summary-col-label {}
                    &.calculator-summary-col-value {
                        font-weight: 600;
                    }
                }

                &:last-of-type {
                    margin-bottom: 0;
                }
            }

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }

    .box-shadow {
        transition: .3s opacity ease-in-out;
        opacity: 0.6;
        position: absolute;
        z-index: 1;
        bottom: -1em;
        left: 5%;
        width: 95%;
        height: 100%;
        background: transparent linear-gradient(180deg, #B5EBFF 0%, #00AEEF 54%, #005270 100%);
        border-radius: .8em;
        filter: blur(1.3em);
    }

    @media all and (max-width: ${variables.tabletS}) {
        flex-direction: column;

        .col {
            width: 100%;
        }

        .calculator-sections {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            
            .calculator-section {
                width: 48%;
            }
        }

        .calculator-summary {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 3em;

            .calculator-body {
                width: 40%;
            }

            .calculator-summary-checkout {
                width: 60%;
                border-top: none;
                border-left: .01em solid #B5EBFF;
                margin-top: 0;
                padding-top: 0;
                margin-left: 3em;
                padding-left: 3em;

                .calculator-summary-checkout-price {
                    font-size: 2em;
                }
            }
        }
    }

    @media all and (max-width: ${variables.mobileL}) {
        .calculator-sections {
            flex-direction: column;
            
            .calculator-section {
                width: 100%;
            }
        }

        .calculator-summary {
            flex-direction: column;

            .calculator-body {
                width: 100%;
            }

            .calculator-summary-checkout {
                width: 100%;
                border-top: .01em solid #B5EBFF;
                border-left: none;
                margin-top: 3em;
                padding-top: 3em;
                margin-left: 0;
                padding-left: 0;

                .calculator-summary-checkout-price {
                    font-size: 2em;
                }

                .calculator-summary-checkout-controls {
                    font-size: 140%;
                    flex-direction: column;

                    > .layout-button {
                        margin-bottom: 1em;
                        margin-right: 0;

                        &:last-of-type {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
`;