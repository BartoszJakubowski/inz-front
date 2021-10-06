import styled from '@emotion/styled';

export default styled.div`
    position: relative;
    width: 100%;

    .dropzone {
        width: 100%;
        display: block;
        text-align: center;
        position: relative;

        .dropzone-value {
            background: white;
            border-radius: .5em;
            overflow: hidden;

            .dropzone-placeholder {
                font-weight: 300;
                color: #666;
                font-size: 1.1em;
                padding: 4em;
            }
        }
    }

    .dropzone-list {
        .dropzone-list-element {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
            margin-bottom: 1em;
            border-bottom: .01em solid #CCCCCC;

            .dropzone-list-element-image {
                width: 1em;
                height: 1.5em;
                position: relative;
                overflow: hidden;
                font-size: 5em;
                color: #666;

                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: auto;
                    transform: translate(-50%, -50%);
                }
            }
            .dropzone-list-element-controls {
                .dropzone-list-element-control {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgb(228, 48, 7, 0.8);
                    padding: .5em 2em;
                    color: white;
                    border-radius: .5em;
                    cursor: pointer;

                    .dropzone-list-element-control-label {
                        margin-right: .5em;
                    }

                    .dropzone-list-element-control-icon {

                    }
                }
            }

            &:last-of-type {
                margin-bottom: 0;
                border-bottom: none;
            }
        }
    }

    &.disabled {
        .dropzone-list {
            .dropzone-list-element {
                background-color: #EEEEEE;
            }
        }
    }
`;
