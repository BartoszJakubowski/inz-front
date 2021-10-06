import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    select {
        width: 100%;
        background-color: #191919;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        padding: 1em;
        border-radius: 5px;
        border-bottom-color: white;
        border-bottom-width: 2px;

        &::placeholder {
            color: white;
        }
    }

    &.style-light-transparent {
        [class$="control"] {
            background-color: black;
            border: 2px solid white;
    
            [class$="singleValue"] {
                color: black;
            }
    
            input {
                color: white !important;
            }
        }

        [class$="menu"] {
            background-color: black;
            border: 2px solid white;

            [class$="option"] {
                background-color: #191919;
                color: white;

                &:hover {
                    background-color: #666666;
                }
            }
        }
    }
`;
