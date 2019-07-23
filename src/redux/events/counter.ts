export interface ADD_COUNTER {
    type: "COUNTER_ADD"
}

export type ADD_COUNTER_ASYNC = {
    type: "COUNTER_ADD_ASYNC",
    delay: number
}

export type SET_COUNTER_DELAY = {
    type: "COUNTER_SET_DELAY",
    delay: number
}

export type CLEAR_COUNTER_DELAY = {
    type: "COUNTER_CLEAR_DELAY"
}

export type RESET_COUNTER = {
    type: "COUNTER_RESET"
}