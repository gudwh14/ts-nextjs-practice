import {createSlice, PayloadAction} from "@reduxjs/toolkit";
let nextId = 1;

export type Todo = {
    id : number;
    title : string;
    done : boolean;
}

export type TodoState = Todo[];

const initialState : TodoState = [];

export const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        addAction(state : TodoState, action : PayloadAction<string>) {
            state.push({
                id : nextId++,
                title : action.payload,
                done : false
            });
        },
        removeAction(state : TodoState, action : PayloadAction<number>) {
            return state.filter((todo)=> todo.id !== action.payload);
        },
        toggleAction(state : TodoState, action : PayloadAction<number>) {
            return state.map((todo)=> {
                return todo.id === action.payload ? {...todo, done : true} : todo
            })
        }
    }
})

export default todoSlice.reducer;
export const {addAction, removeAction, toggleAction} = todoSlice.actions;