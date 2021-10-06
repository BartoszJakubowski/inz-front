import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    .layout-forms-input-wrapper {
        .internal-wrapper {
            border: none;

            .input-body {
                height: 2.5em;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                .switch {
                    border-radius: 1em !important;

                    .react-switch-bg {
                        height: 2em !important;
                        width: 4em !important;
                        border-radius: 1em !important;

                        > * {
                            height: 2em !important;
                            width: 2.3em !important;
                        }
                    }
                    .react-switch-handle {
                        height: 1.85em !important;
                        width: 1.85em !important;
                    }
                }
            }
        }
    }

    &.error {
        .switch {
            .react-switch-bg {
                border: .2em solid red;
            }
        }
    }
`;
