import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreT } from "../../store";
import {
  increment,
  decrement,
  CounterActionT,
} from "../../store/actionCreators";

const CounterWithRedux: React.VFC = () => {
  // dispatch
  const dispatch = useDispatch<Dispatch>();

  const erhoehen = () => dispatch(increment());

  const reduzieren = () => {
    // Redux step 4: Dispatcher
    dispatch(
      // Redux step 3: Action
      decrement()
    );
  };

  // selector
  const count = useSelector<StoreT, number>((state) => state.count);

  return (
    <>
      <button onClick={erhoehen}>Count: {count}</button>
      {/* Redux step 1: Component */}
      <button onClick={reduzieren}>-</button>
      <button>reset</button>
    </>
  );
};

export default CounterWithRedux;
