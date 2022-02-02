import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreT } from "../../store";
import { increment, decrement, CounterAction } from "../../store/slices/count";

const useCount = () => {
  // dispatch
  const dispatch = useDispatch<Dispatch<CounterAction>>();

  const handleIncrement = () => {
    // Redux step 4: Dispatcher
    dispatch(
      // Redux step 3: Action
      increment()
    );
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  // selector
  const count = useSelector<StoreT, number>((state) => state.countReduxToolkit);

  return { count, handleIncrement, handleDecrement };
};

const CounterWithReduxToolkit: React.VFC = () => {
  const { count, handleIncrement, handleDecrement } = useCount();
  return (
    <>
      {/* Redux step 1: Component */}
      <button onClick={handleIncrement}>Count: {count}</button>
      <button onClick={handleDecrement}>-</button>
      <button>reset</button>
    </>
  );
};

export default CounterWithReduxToolkit;
