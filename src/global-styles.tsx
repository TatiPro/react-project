import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
		--blue: #007bff;
        --light-blue: #0069d9;
        --grey: #343a40;
        --theme-text: var(--invert);
	}
    body {
        transition: 0.15s;
        background-color: var(--theme);
    }
    html[data-theme=light] {
	    --theme: white;
        --invert: black;
         
        --alternate-color:#cbcbe5; 
    }
    body *{
        transition: 0.15s;
        
    }
    html[data-theme=dark] {
        --alternate-color:#535386; 
		--theme: black;
        --invert: white;
    }

`;

export default GlobalStyles;
