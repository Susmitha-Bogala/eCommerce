import redux, { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";
const FinalStore = createStore(rootReducer, applyMiddleware(thunk, logger));

export default FinalStore;
