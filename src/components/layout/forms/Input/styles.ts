import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    .layout-forms-input-wrapper {
        margin-top: 1em;
        .label-wrapper {
            margin: .5em 0;
        }
    }

    input { 
        width: 100%;
        background-color: #191919;
        height: 50px;
        padding: 0 1em;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        border-radius: 5px;
        border-right: none;
        border-left: none;
        border-top: none;
        border-bottom-color: white;
        
        &::placeholder {
            color: white;
        }
    }

    &.style-light {

        .label-wrapper {
            text-transform: uppercase;
        }
        input {
            background-color: white;
            color: black;
            border: 1px solid black;
            font-size: 11px;

            &::placeholder {
                color: rgb(59, 59, 59);
                font-weight: 300;
            }
        }
    }
`;
