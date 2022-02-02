import { Action } from "redux";

import { ERHOEHEN, REDUZIEREN } from "./actionTypes";

// export type IncrementActionT = Action<typeof ERHOEHEN>;
// export type DecrementActionT = Action<typeof REDUZIEREN>;

// enum {
//   ERHOEHEN = 'Erhohen',
//   REDUZIEREN = 'Reduzieren',
// };

type CounterActionTypes = typeof REDUZIEREN | typeof ERHOEHEN;

export type CounterActionT = Action<CounterActionTypes>;

export const increment = (): CounterActionT => {
  return {
    type: ERHOEHEN,
  };
};

// Redux step 2: Action Creator
export const decrement = (): CounterActionT => {
  return {
    type: REDUZIEREN,
  };
};
