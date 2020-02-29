import { combineReducers } from "redux";
import counter, { Counter } from "./counter";

export type AppState = {
    counter: Counter
}

export default combineReducers<AppState>({
    counter
});