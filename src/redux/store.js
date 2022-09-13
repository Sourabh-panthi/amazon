import { legacy_createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = legacy_createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
