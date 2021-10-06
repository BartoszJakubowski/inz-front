import styled from '@emotion/styled';

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5em;

    .layout-forms-input-wrapper {
        margin-bottom: 0;
    }

    .layout-forms-switch {
        font-size: 80%;
        margin-top: .2em;

        .layout-forms-input-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;

            .internal-wrapper {
                .input-body {
                    justify-content: flex-end;
                    font-size: 80%;
                }
            }
        }
    }
`;
