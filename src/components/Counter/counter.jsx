import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}
