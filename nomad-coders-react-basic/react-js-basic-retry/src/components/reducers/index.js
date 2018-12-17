import { combineReducers } from "redux";
import getApi from "./reducer_getApi";
const reducers = combineReducers({
  movies: getApi
});

export default reducers;
