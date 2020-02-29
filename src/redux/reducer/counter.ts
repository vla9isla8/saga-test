import { Reducer } from "react";
import { ADD_COUNTER, CLEAR_COUNTER_DELAY, RESET_COUNTER, SET_COUNTER_DELAY } from "../events/counter";

type State = {
    count: number,
    usedDelay?: number | undefined
}

export type Counter = State | undefined;

const counter: Reducer<Counter,ADD_COUNTER | RESET_COUNTER | SET_COUNTER_DELAY | CLEAR_COUNTER_DELAY> = (state, action) => {
    if (state === undefined) {
        return {
            count: 0
        }
    }
    switch(action.type) {
        case "COUNTER_ADD":
            return {
                ...state,
                count: state.count + 1
            }
        case "COUNTER_CLEAR_DELAY":
            return {
                ...state,
                usedDelay: undefined
            }
        case "COUNTER_SET_DELAY":
            return {
                ...state,
                usedDelay: action.delay
            }
        case "COUNTER_RESET":
            return {
                ...state,
                count: 0
            }
    }
    return state;
}

export default counter;