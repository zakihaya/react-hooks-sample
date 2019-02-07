import React from "react";
import ReactDOM from "react-dom";

import { UseStateSample } from "./UseStateSample";
import { UseStateSample2 } from "./UseStateSample2";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>UseStateSample</h1>
      <UseStateSample />

      <h1>UseStateSample2</h1>
      <UseStateSample2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
