import styled from '@emotion/styled';

export default styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
        z-index: 98;
    }

    .modal-container {
        position: fixed;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        background-color: white;
        border-radius: .5em;
        box-shadow: 0 0.4em 1em rgba(0,0,0,.05);
        z-index: 99;
        overflow: auto;

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            padding: 2em;
            background-color: #154787;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23a1bee3' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

            .modal-header-title {
                font-weight: 300;
                font-size: 2em;
                color: #666666;
                color: white;
            }

            .modal-header-close {
                font-size: 1.5em;
                color: #CCCCCC;
                cursor: pointer;

                &:hover {
                    color: #FFFFFF;
                }
            }
        }

        .modal-body {
            padding: 2em;
        }
    }
`;