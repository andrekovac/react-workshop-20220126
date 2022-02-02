import { CounterActionT } from "../actionCreators";
import { INCREMENT } from "../actionTypes";

const defaultState = 0;

const ERHOEHEN = "Erhoehen";
const REDUZIEREN = "Reduzieren";

const countReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ERHOEHEN:
      state = state + 1;
      break;
    case REDUZIEREN:
      state = state - 1;
      break;
  }
  return state;
};

export default countReducer;
