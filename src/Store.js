import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducers";
import thunk from "redux-thunk";

export default createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
