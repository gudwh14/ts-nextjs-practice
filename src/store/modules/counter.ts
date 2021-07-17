import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    counter : number
}

const initialState : CounterState = {
    counter : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState : initialState,
    reducers : {
        increaseAction(state : CounterState) {
            state.counter = state.counter + 1;
        },
        decreaseAction(state : CounterState) {
            state.counter = state.counter - 1;
        },
        increaseByAction(state : CounterState, action : PayloadAction<number>) {
            state.counter = state.counter + action.payload;
        }
    }
})

export default counterSlice.reducer;
export const {increaseAction, decreaseAction, increaseByAction} = counterSlice.actions;