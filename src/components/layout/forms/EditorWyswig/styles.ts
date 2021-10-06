import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    .layout-forms-input-wrapper {
        .internal-wrapper {
            .input-body {
                > * {
                    background-color: white;
                    border: none !important;
                    height: 15em;
                    overflow: auto;
                }
            }
        }
    }

    &.error {
        
    }

    &.decorator-left {
        
    }
    &.decorator-right {
       
    }
`;
