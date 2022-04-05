import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homepageReducer from "./containers/HomePage/slice";

export const store = configureStore({
  reducer: {
    homePage: homepageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
