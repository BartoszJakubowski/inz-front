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

        .dropzone-controls {
            position: absolute;
            top: .5em;
            right: .5em;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .dropzone-control {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgb(228, 48, 7, 0.8);
                padding: .5em 2em;
                color: white;
                border-radius: .5em;
                cursor: pointer;

                .dropzone-control-label {
                    margin-right: .5em;
                }

                .dropzone-control-icon {

                }
            }
        }
    }
`;
