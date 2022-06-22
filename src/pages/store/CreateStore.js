import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers/ReducerFunction";

let initialState = {
    userName: "",
    password: "",
    btn_hide:false
}

export const store = legacy_createStore(rootReducer,initialState);