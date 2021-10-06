import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

export default styled.div`
    .layout-container {
        .headline {
            text-align: center;
            font-size: 3em;
            font-weight: 600;
        }

        .login-form-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 2em;
            flex-direction: column;
            align-items: center;

            .layout-forms-form {
                width: 30%;
                form {
                    .layout-forms-input-row {
                        .layout-forms-input {
                            .layout-forms-input-wrapper {
                                margin-top: 0;
                                margin-bottom: .1em;

                                .internal-wrapper {
                                    .input-body {
                                        .input {
                                            color: orange;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .layout-button {
                        margin-top: 1em;
                    }
                }
            }

            .no-account {
                margin-top: 3em;

                a {
                    text-decoration: none;
                    color: orange;
                }
            }
        }
    }
`;