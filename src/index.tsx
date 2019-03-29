import * as React from "react";
import { render } from "react-dom";
import './index.css'
import StateContainer from "./StateContainer";
import App from "./App";

render(
  <StateContainer>
    <App />
  </StateContainer>,
  document.getElementById("root")
);
