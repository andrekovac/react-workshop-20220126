import React, { useState } from "react";
import { useParams } from "react-router-dom";

type CounterParams = {
  start: string;
  step: string;
};

const Counter: React.VFC = () => {
  const { start, step } = useParams<CounterParams>();

  const startInt = parseInt(start);
  const stepInt = parseInt(step);
  const [count, setCount] = useState<number>(startInt);

  const incrementCount = () => {
    setCount(count + stepInt);
  };

  const decrementCount = () => {
    setCount(count - stepInt);
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
