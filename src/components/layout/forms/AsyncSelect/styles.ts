import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    [class$=container] {
        width: 100%;

        [class$=control] {
            width: 100%;
            height: 3.5em;
            border: .1em solid white;
            padding: 0 1em;
            color: #666666;
            border-radius: .5em;
            font-size: .9em;

            [class$=placeholder] {
                color: #CCCCCC;
            }
        }

        [class$=menu] {
            z-index: 99;
        }
    }

    &.error {
        [class$=container] {
            [class$=control] {
                border: .2em solid red;
            }
        }
    }

    &.decorator-left {
        [class$=container] {
            [class$=control] {
                padding-left: 2em;
            }
        }
    }
    &.decorator-right {
        [class$=container] {
            [class$=control] {
                padding-right: 2em;
            }
        }
    }
`;
