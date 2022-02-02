import { CounterActionT } from "../actionCreators";
import { ERHOEHEN, REDUZIEREN } from "../actionTypes";

const defaultState = 0;

const countReducer = (state = defaultState, action: CounterActionT) => {
  switch (action.type) {
    case ERHOEHEN:
      state = state + 1;
      break;
    // Redux step 5: Reducer
    case REDUZIEREN:
      state = state - 1;
      break;
  }
  // Redux step 6: Store
  return state;
};

const myArray = [1, 2, 3, 4, 5];
const reducer = (state: number, action: number) => state + action;

const mySum = myArray.reduce(reducer, 0);
console.log(mySum);

export default countReducer;
