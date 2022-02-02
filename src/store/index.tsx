import { configureStore, combineReducers } from "@reduxjs/toolkit";

import countReducerVanillaRedux from "./reducers/count";
import booksSlice from "./slices/books";
import countSlice from "./slices/count";

export const rootReducer = combineReducers({
  books: booksSlice,
  count: countReducerVanillaRedux,
  countReduxToolkit: countSlice,
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
