import styled from '@emotion/styled';

export default styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.5em;
    position: relative;

    .layout-forms-input-error {
        position: absolute;
        top: 100%;
    }

    .label-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: .4em;


        .layout-forms-input-helper {
            margin-right: .5em;
        }
    }

    .internal-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        position: relative;

        .input-decorator {
            position: absolute;
            top: 0;
            z-index: 2;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 .5em;
            font-weight: 600;
            color: #666666;
            border-left: .1em solid #DDDDDD;

            &.input-decorator-left {
                display: none;
                left: 0;
                border-top-left-radius: .5em;
                border-bottom-left-radius: .5em;
            }

            &.input-decorator-right {
                right: 0;
                border-top-right-radius: .5em;
                border-bottom-right-radius: .5em;
            }

            &.input-decorator-state-info {
                background-color: #EEEEEE;
                color: #333333;
            }
            &.input-decorator-state-success {
                background-color: #baeb34;
                color: #FFFFFF;
            }
            &.input-decorator-state-warning {
                background-color: #eb7d34;
                color: #FFFFFF;
            }
            &.input-decorator-state-alert {
                background-color: #eb3434;
                color: #FFFFFF;
            }
        }
        .input-body {
            width: 100%;
        }
    }
`;
