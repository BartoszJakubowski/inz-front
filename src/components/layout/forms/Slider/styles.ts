import styled from '@emotion/styled';

export default styled.div`
    width: 100%;

    .internal-wrapper {
        border: none;
    }

    .react-slider {
        width: 100%;
        height: 2em;

        .track {
            top: .7em;
            height: .5em;
            background: transparent linear-gradient(90deg, #00AEEF 0%, #005270 100%);
            border-radius: 1em;

            &.track-1 {
                background: #D1D1D1;
            }
        }

        .thumb {
            width: 1.7em;
            height: 1.7em;
            line-height: 1em;
            background: #00AEEF;
            box-shadow: 0px .3em .2em rgba(0,0,0,.3);
            border: .3em solid white;
            border-radius: 36em;
            outline: none;
        }
    }

    .legend {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .8em;
        color: #121212;
        margin-top: -1em;
    }

    &.error {
        input {
            border: .2em solid red;
        }
    }

    &.decorator-left {
        input {
            padding-left: 2.5em;
        }
    }
    &.decorator-right {
        input {
            padding-right: 2.5em;
        }
    }
`;
