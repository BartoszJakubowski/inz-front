import styled from '@emotion/styled';

export default styled.div`
    .tooltip-text-block {
        .tooltip-text {
            color: white;
            margin-bottom: .3em;
            font-size: 1em;

            .tooltip-text-label {
                font-weight: 300;
                margin-right: .5em;

                * {
                    color: #EEEEEE !important;
                }
            }
            .tooltip-text-value {
                font-weight: 600;

                * {
                    color: #EEEEEE !important;
                }
            }

            &.tooltip-text-large {
                font-size: 1.1em;
            }
        }
    }
`;