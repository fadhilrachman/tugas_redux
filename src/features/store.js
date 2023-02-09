import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";

let rootReducer = combineReducers({
  counter: counterReducer,
});

let store = createStore(rootReducer);

export default store;
