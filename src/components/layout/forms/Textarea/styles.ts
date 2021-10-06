import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    textarea {
        width: 100%;
        background-color: #191919;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        padding: 1em;
        border-radius: 5px;
        border-right: none;
        border-left: none;
        border-top: none;
        border-bottom-color: white;
        border-bottom-width: .125em;

        &::placeholder {
            color: white;
        }
    }
`;
