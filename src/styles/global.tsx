import React from "react";
import { Global, css } from "@emotion/react";
import theme from "./theme";

const style = css`
html {
    font-size: 10px;
}
body {
    margin: 0;
    padding: 0;
    background: ${theme.mainColor.yellow}
}
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
