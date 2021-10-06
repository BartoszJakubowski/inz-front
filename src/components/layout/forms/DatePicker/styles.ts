import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    input {
        width: 100%;
        height: 3.5em;
        border: .1em solid white;
        padding: 0 1em;
        color: #666666;
        border-radius: .5em;
        font-size: .9em;

        &::placeholder {
            color: #CCCCCC;
        }
    }

    .layout-forms-input-wrapper {
        .internal-wrapper {
            border: none;
        }

        > * {
            width: 100%;

            .react-datepicker {
                width: 100%;

                .react-datepicker__month-container {
                    width: 100%;
                }
            }

            .react-datepicker-wrapper {
                width: 100%;
            }

            .react-datepicker-popper {
                z-index: 9;

                .react-datepicker {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;

                    .react-datepicker__month-container {
                        width: 100%;
                    }
                }
            }
        }
    }

    &.error {
        input {
            border: .1em solid red;
        }
    }

    &.decorator-left {
        input {
            padding-left: 2.5em;
        }
    }
    &.decorator-right {
        input {
            padding-right: 2.5em;
        }
    }
`;
