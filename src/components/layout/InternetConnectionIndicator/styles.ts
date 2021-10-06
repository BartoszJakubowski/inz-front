import styled from '@emotion/styled';

export default styled.div`
    padding: .5em 1em;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #333333;
    z-index: 999;

    .indicator-content {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        color: white;
        font-weight: 600;

        .indicator-text {
            margin-right: 1em;
        }
        .indicator-icon {

        }
    }

    &.state-offline {
        background-color: #b8211c;
    }

    &.state-online {
        background-color: #62b81c;
    }
`;