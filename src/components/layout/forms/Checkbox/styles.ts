import styled from '@emotion/styled';
import variables from 'theme/styles/vars';

export default styled.div`
    .input-internal-wrapper {
        position: relative;
        margin: .5em auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        label {
            position: relative;
            text-align: left;
            cursor: pointer;
            display: inline-block;
            color: black;

            .trigger {
                border: 1px solid #b6b6b6;
                width: 16px;
                height: 16px;
                background-color: #FFFFFF;
                display: inline-block;
                cursor: pointer;
                position: relative;
            }
            input {
                position: absolute;
                z-index: -1;
                width: 1px;
                height: 1px;
                margin: 0;
                opacity: .01;
            }
            input:checked+.trigger,
            input[value="true"]+.trigger {
                &:after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    background: #FC2B1B;
                    top: 25%;
                    left: 25%;
                    width: 50%;
                    height: 50%;
                }
            }
        }

        .label {
            display: inline-block;
            padding-left: .9em;
            text-align: left;
            line-height: 120%;
            font-size: .8em;
            color: ${variables.dpc_fontDark};
            max-width: 90%;
            color: black;
            font-weight: 300;

            a {
                text-decoration: underline;
                color: #666666;
            }
            .expand-trigger {
                cursor: pointer;
            }
        }
    }
`;
