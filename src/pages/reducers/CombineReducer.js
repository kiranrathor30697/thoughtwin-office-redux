import { combineReducers } from "redux";
import { rootReducer } from "./ReducerFunction";

export const reducers =  combineReducers({
    allReducers : rootReducer,
})