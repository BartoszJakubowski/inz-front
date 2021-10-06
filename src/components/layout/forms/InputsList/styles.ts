import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    > .layout-forms-input-wrapper {
        > .internal-wrapper {
            border: none;
        }
    }

    .value-elem-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 2em;
        padding-top: 2em;
        border-top: .1em solid #666666;

        .value-elem-index {
            padding: .5em .5em .5em 0;
            color: #666666;
            font-size: 2em;
            font-weight: 900;
        }

        .value-elem-form {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            > * {
                padding: 0 0.5em;
            }
        }

        .value-elem-controls {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 2em;
            font-size: 1.2em;

            > * {
                margin-bottom: .5em;
            }
        }

        &.layout-vertical {
            .value-elem-form {
                flex-direction: row;
            }
        }

        &.layout-horizontal {
            .value-elem-form {
                flex-direction: column;

                > * {
                    padding: 0;
                }
            }
        }

        &.layout-fluid {
            .value-elem-form {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }
    &.error {}
`;
