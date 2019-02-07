import React from "react";
import ReactDOM from "react-dom";

import { UseStateSample } from "./UseStateSample";
import { UseStateSample2 } from "./UseStateSample2";
import { UseEffectSample1 } from "./UseEffectSample1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>UseStateSample</h1>
      <UseStateSample />

      <h1>UseStateSample2</h1>
      <UseStateSample2 />

      <h1>UseEffectSample1</h1>
      <UseEffectSample1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
