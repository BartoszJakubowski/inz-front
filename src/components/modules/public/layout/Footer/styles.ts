import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

export default styled.div`
    padding: 4em 0 2em 0;
    background: black;

    .top {
        .layout-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .bottom {
        margin-top: 3em;
        font-size: 1em;
        font-weight: 500;
        line-height: 1.875em;

        .layout-container {
            display: flex;
            
            .bottom-left {
                display: flex;
                width: 40%;

                .col {
                    color: white;
                    display: flex;
                    flex-direction: column;
                    margin-right: 3em;

                    .elem {
                        line-height: 1.875em;
                    }
                }
            }

            .bottom-right {
                display: flex;
                width: 60%;
                justify-content: space-between;

                .about-services-wrapper {
                    display: flex;
                    width: 50%;

                    .col {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
    
                        .elem {
                            color: white;
                            text-decoration: none;

                            &:hover {
                                color: #b3b1b1;
                            }
                        }
                    }
                }

                .terms-socials-wrapper {
                    justify-content: space-around;
                    width: 50%;
                    display: flex;

                    .col {
                        display: flex;
                        flex-direction: column;

                        .socials-elem {
                            margin-bottom: 1em;
                            
                            img {
                                width: 100%;
                                max-width: 100%;

                                &:hover {
                                    width: 110%;
                                    max-width: 110%;
                                }
                            }
                        }

                        a {
                            color: white;
                            text-decoration: none;
                            cursor: pointer;

                            &:hover {
                                color: #b3b1b1;
                            }
                        }
                    }
                }
            }
        }
    }

    .super-bottom {
        margin-top: 3em;
        
        .copyright {
            font-size: .9em;
            font-weight: 300;
            color: #D1D1D1;
        }
    }

    @media all and (max-width: ${variables.tabletL}) {
        .bottom {
            .layout-container {
                .bottom-left {
                    width: 50%;
                }

                .bottom-right {
                    width: 50%;
                }
            }
        }
    }

    @media all and (max-width: ${variables.tabletS}) {
        .bottom {
            .layout-container {
                flex-direction: column;

                .bottom-left {
                    justify-content: space-evenly;
                    width: 100%;
                    margin-bottom: 2em;

                    .col {
                        margin: 0;
                    }
                }

                .bottom-right {
                    justify-content: space-evenly;
                    width: 100%;
                }
            }
        }
    }

    @media all and (max-width: ${variables.mobileM}) {
        padding: 2em;
        .bottom {
            .layout-container {
                flex-direction: column;

                .bottom-left {
                    flex-direction: column;

                    .col-address {
                        margin-bottom: 2em;
                    }
                }

                .bottom-right {
                    flex-direction: column;

                    .about-services-wrapper {
                        width: 100%;
                        margin-bottom: 2em;
                        justify-content: space-around;
                    }

                    .terms-socials-wrapper {
                        flex-direction: column;
                        width: 100%;

                        .col-terms {
                            margin-bottom: 2em;
                        }
                        
                        .col-socials {
                            flex-direction: row;
                            justify-content: space-around;
                        }
                    }
                }
            }
        }
    }
`;