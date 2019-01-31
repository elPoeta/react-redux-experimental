import { createStore, combineReducers } from "redux";
import viewCharacters from "../reducers/ReducerCharacters";
const reducer = combineReducers({
  viewCharacters
});

const store = createStore(reducer);

export default store;
