import * as React from "react";
const { useState } = React;

export const UseStateSample2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <p>
      <b>left: {left}</b>
      <button onClick={() => setLeft(left - 1)}>-</button>
      <button onClick={() => setLeft(left + 1)}>+</button>

      <b>right: {right}</b>
      <button onClick={() => setRight(right - 1)}>-</button>
      <button onClick={() => setRight(right + 1)}>+</button>
    </p>
  );
};
