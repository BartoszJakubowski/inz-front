import styled from '@emotion/styled';

export default styled.div`
    .spinner-text {
        text-align: center;
        font-size: 1em;
        margin: 0 auto;
        margin-top: 3em;
        color: #666666;
    }

    .spinner {
        width: 4em;
        height: 3.2em;
        text-align: center;
        font-size: .9em;
        margin: 0 auto;
    }

    .spinner>div {
        height: 100%;
        width: .5em;
        display: inline-block;

        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .spinner .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .spinner .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .spinner .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .spinner .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-stretchdelay {
        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4);
        }

        20% {
            -webkit-transform: scaleY(1.0);
        }
    }

    @keyframes sk-stretchdelay {
        0%,
        40%,
        100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }

        20% {
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
        }
    }

    &.color-primary {
        .spinner>div {
            background-color: #f56d0d;
        }
    }

    &.color-white {
        .spinner>div {
            background-color: white;
        }
    }

    &.position-absolute {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        top: 0;
        left: 0;

        .spinner-text {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        .spinner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &.position-relative {
        position: relative;

        .spinner-text {}

        .spinner {
            position: relative;
        }
    }

    &.size-small {
        font-size: 80%;
    }

    &.size-medium {
        font-size: 100%;
    }

    &.size-large {
        font-size: 120%;
    }
`;

