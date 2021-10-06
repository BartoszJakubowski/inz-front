import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

export default styled.div`
    background: black;

    .top {
        background: white;
        padding: .5em 0;

        .layout-nav-section {
            .layout-nav-element {
                font-size: 90%;

                .layout-button {
                    .button {
                        color: #121212;
                        font-weight: 400;

                        .button-content {
                            color: black;
                        }
                    }
                }
            }
        }
    }

    .main {
        padding: 1em 0;
        transition: .2s background-color ease-in-out;

        .layout-container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .col {
                width: 50%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                &.col-left {
                    width: 70%;
                    justify-content: space-between;

                    .layout-nav-section {
                        .layout-nav-element {
                            margin-right: 1em;

                            &:last-of-type {
                                margin: 0;
                            }
                        }
                    }
                }
                
                &.col-right {
                    justify-content: flex-end;

                    .layout-nav-section {
                        .layout-nav-element {
                            margin-right: 1em;

                            &:last-of-type {
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }
    }

    .mobile-nav {
        opacity: 0;
        display: flex;
        position: fixed;
        right: 0;
        height: 100%;
        top: 0;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        background: black;
        padding: 1.3em;
        transform: translateX(100%);
        transition: .3s all ease-in-out;
        width: 100%;

        .nav-controls {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .nav-control {
                color: white;
                cursor: pointer;
            }
        }

        .nav-body {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 2em;
            font-size: 1.5em;
            font-weight: 500;
            line-height: 1.875em;
            margin-left: 2em;

            .layout-nav-section {
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                > .layout-nav-element {
                    padding-bottom: .7em;

                    &:last-of-type {
                        padding-bottom: 0;
                        border-bottom: 0;
                    }
                }

                .layout-nav-element {
                    width: 100%;
                    margin-bottom: .7em;

                    .layout-button {
                        justify-content: flex-start;

                        .button-icon {
                            display: none;
                        }
                    }

                    .sub-nav-elements-container {
                        display: block;
                        opacity: 1;
                        position: relative;
                        width: auto;
                        margin-left: 1em;

                        .sub-nav-elements {
                            min-width: auto;
                            background: transparent;
                            border-radius: none;
                            overflow: auto;

                            .layout-nav-element {
                                border-top: none;
                                padding: 0;
                            }
                        }
                    }
                }
            }

            .row-top {
                width: 100%;
            }

            .row-bottom {
                color: white;
                width: 100%;
                display: flex;
                flex-direction: column;

                .layout-nav-section {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-bottom: 2em;

                    .layout-nav-element {
                        width: auto;
                        min-width: 20%;
                        max-width: 45%;
                        margin-right: 3%;
                        border: none;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }

                .login-button {
                    margin-bottom: .7em;
                    color: white;
                    text-decoration: none;
                }

                .language-button {
                    margin-bottom: .7em;
                }
                
                .layout-nav-section {
                    width: 100%;

                    .layout-nav-element {
                        width: 100%;
                        max-width: unset;

                        .layout-button {
                            a {
                                width: 100%;

                                .button {
                                    width: 70%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletL}) {
        .top {
            display: none;
        }

        .main {
            .layout-container {
                .col {
                    &.col-left {
                        .layout-nav-section { 
                            display: none;
                        }
                    }
                    &.col-right {
                        .layout-nav-section { 
                            display: none;
                        }

                        .login-button {
                            display: none;
                        }

                        .mobile-nav-trigger {
                            display: block;
                        }
                    }
                }
            }
        }

        &.expanded {
            .mobile-nav {
                opacity: 1;
                transform: translateX(0%);
            }
        }
    }
`;