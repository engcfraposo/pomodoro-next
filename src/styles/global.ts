import { createGlobalStyle } from 'styled-components';
import mixins from './mixins';

export default createGlobalStyle`
    @media(max-width: 1088px){
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }

    body, button {
        font-family: "Inter", sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${mixins.colors.background};
        color: ${mixins.colors.text};
    }

    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`