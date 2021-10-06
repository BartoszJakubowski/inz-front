import styled from '@emotion/styled';

export default styled.div`
    display: block;
    position: relative;
    width: 100%;

    .section-header {
        width: 100%;
        margin-bottom: 1em;
        padding-bottom: 1em;
        border-bottom: .1em solid #CCCCCC;

        .section-header-control {
            cursor: pointer;
            margin: 0;
            padding: 0;

            .control-label {
                font-size: .9em;
                color: #666666;
                text-decoration: underline;

                .control-label-text {

                }
                .control-label-icon {
                    margin-left: 1em;
                }
            }
        }
    }

    .section-body {

    }
`;
