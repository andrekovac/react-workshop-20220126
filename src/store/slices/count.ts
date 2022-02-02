import { Action, createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "countReduxToolkit",
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

export type CounterAction = Action<
  typeof increment.type | typeof decrement.type
>;

export default counterSlice.reducer;
