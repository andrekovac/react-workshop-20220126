import { configureStore, combineReducers } from "@reduxjs/toolkit";

import count from "./reducers/count";

export const rootReducer = combineReducers({
  books: (state = [], _action) => state,
  count,
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
