import css from '@emotion/css';

export default css `
    html, body, * {
        font-family: 'Poppins', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    html, body {
        font-size: 1em;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, p, span {
        line-height: 120%;
    }
`;