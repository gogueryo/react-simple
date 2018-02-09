import React from "react";
import { render } from "react-dom";
//import Hello from './components/Hello';

import simpleCE from "./components/simple-ce";
/*
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);
*/

render(simpleCE, document.getElementById("root"));
