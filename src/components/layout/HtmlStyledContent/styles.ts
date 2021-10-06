import styled from '@emotion/styled';

export default styled.div`
    line-height: 120%;
    text-align: justify;
    color: #333333;

    h1 {
        font-size: 1.6em;
        font-weight: 600;
        margin-bottom: 1em;
    }
    h2 {
        font-size: 1.3em;
        font-weight: 400;
        margin-bottom: .5em;
    }
    h3 {
        font-size: 1.1em;
        font-weight: 600;
        margin-bottom: .25em;
    }
    ul {
        margin: 1em 0;
        list-style-type: disc;
    }
    ol {
        margin: 1em 0;
        list-style-type: decimal;
    }
    li {
        margin-left: 1.5em;
    }
    a {
        color: #666666;
        text-decoration: underline;
    }
    i {
        font-style: italic;
    }
    b, strong {
        font-weight: 500;
    }
    p {
        margin: 1em 0;
        font-weight: 300;
    }
    img {
        height: auto;
        max-width: 100%;
        border-radius:.5em;
        width: 100%;
    }
`;