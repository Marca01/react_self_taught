import counterReducer from "./Counter";
import Logged from "./Logged";
import { combineReducers } from "redux";

// const allReducers = combineReducers({
//   counter: counterReducer,
//   logged: Logged,
// });
const allReducers = combineReducers({
  counter: counterReducer,
  logged: Logged,
});
export default allReducers;
