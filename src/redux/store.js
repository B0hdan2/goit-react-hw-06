import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactReducer } from "./reducers";

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(rootReducer, enhancer);
