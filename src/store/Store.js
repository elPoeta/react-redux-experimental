import { createStore, combineReducers, applyMiddleware } from "redux";
import viewCharacters from "../reducers/ReducerCharacters";
import Logger from "../reducers/middleware/Logger";
const reducer = combineReducers({
  viewCharacters
});

const store = createStore(reducer, applyMiddleware(Logger));

export default store;
