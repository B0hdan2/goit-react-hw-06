import { combineReducers, createStore } from "redux";
import { contactReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
