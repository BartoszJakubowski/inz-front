import styled from '@emotion/styled';

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    > * {
        margin-right: 1em;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;
