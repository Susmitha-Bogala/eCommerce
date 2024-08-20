import { counterReducer } from "./counter/reducer";
import { userReducer } from "./userData/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  key1: userReducer,
  key2: counterReducer,
});

export default rootReducer;
