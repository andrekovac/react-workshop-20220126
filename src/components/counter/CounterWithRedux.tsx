import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreT } from "../../store";
import {
  increment as incrementAction,
  CounterActionT,
} from "../../store/actionCreators";

const CounterWithRedux: React.VFC = () => {
  // dispatch
  const dispatch = useDispatch<Dispatch>();

  const erhoehen = () => dispatch({ type: "Erhoehen" });
  const reduzieren = () => dispatch({ type: "Reduzieren" });

  // selector
  const count = useSelector<StoreT, number>((state) => state.count);

  return (
    <>
      <button onClick={erhoehen}>Count: {count}</button>
      <button onClick={reduzieren}>-</button>
      <button>reset</button>
    </>
  );
};

export default CounterWithRedux;
