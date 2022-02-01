import React, { useState } from "react";

const Counter: React.VFC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={incrementCount}>Count: {count}</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>reset</button>
    </>
  );
};

export default Counter;
