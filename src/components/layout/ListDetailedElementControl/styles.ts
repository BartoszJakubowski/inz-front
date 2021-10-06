import styled from '@emotion/styled';

export default styled.div`
    border-left: .1em solid #EEEEEE;
    padding-left: .3em;
    margin-left: .3em;
    min-width: 5em;
    text-align: center;

    .control-link {
        text-decoration: none;
        cursor: pointer;

        > button {
            cursor: pointer;
            border: none;
            background: none;
            padding: 0;
            margin: 0;
        }

        .control-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .control-icon {
                color: #666666;
                font-size: 1.2em;
            }
            .control-label {
                color: #CCCCCC;
                font-weight: 300;
                font-size: .7em;
            }
        }
    }

    &:hover {
        .control-link {
            .control-content {
                .control-icon {
                    color: #333333;
                }
                .control-label {
                    color: #666666;
                }
            }
        }
    }
`;