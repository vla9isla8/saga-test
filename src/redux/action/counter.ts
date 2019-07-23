import { ADD_COUNTER, ADD_COUNTER_ASYNC, RESET_COUNTER, SET_COUNTER_DELAY, CLEAR_COUNTER_DELAY } from "../events/counter";
import {takeEvery,put,call} from "redux-saga/effects";

const delay = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve,timeout));
}

export const add = (): ADD_COUNTER => ({
    type: "COUNTER_ADD"
});
export const addAsync = (delay: number): ADD_COUNTER_ASYNC => ({
    type: "COUNTER_ADD_ASYNC",
    delay
});
export const setDelay = (delay: number): SET_COUNTER_DELAY => ({
    type: "COUNTER_SET_DELAY",
    delay
});

export const clearDelay = (): CLEAR_COUNTER_DELAY => ({
    type: "COUNTER_CLEAR_DELAY"
});

export const reset = (): RESET_COUNTER => ({
    type: "COUNTER_RESET"
});

function* addCounterAsync(action: ADD_COUNTER_ASYNC) {
    yield put(setDelay(action.delay));
    yield delay(action.delay);
    yield put(add());
    yield put(clearDelay());
}

export function* watchAddCounterAsync() {
    yield takeEvery('COUNTER_ADD_ASYNC', addCounterAsync);
}