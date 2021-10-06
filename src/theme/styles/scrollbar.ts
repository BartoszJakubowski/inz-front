import css from '@emotion/css';

export default css `
    .styled-h-scrollbar {
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: #333333;
        }

        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: #333333;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #FC2B1B;
        }
    }
`