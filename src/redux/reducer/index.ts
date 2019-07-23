import { combineReducers, Reducer, ReducersMapObject } from "redux";
import counter, { Counter } from "./counter";
import { ADD_COUNTER } from "../events/counter";

export type AppState = {
    counter: Counter
}

export default combineReducers<AppState>({
    counter
});