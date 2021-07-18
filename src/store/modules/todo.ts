import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Todo = {
    id : number;
    title : string;
    done : boolean;
}

let nextId = 1;

const initialState : Todo[] = [];

export const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        addAction(state : Todo[], action : PayloadAction<string>) {
            state.concat({
                id : nextId++,
                title : action.payload,
                done : false
            });
        },
        removeAction(state : Todo[], action : PayloadAction<number>) {
            state.filter((todo)=> {
                return todo.id !== action.payload
            })
        },
        toggleAction(state : Todo[], action : PayloadAction<number>) {
            state.map((todo)=> todo.id === action.payload ? {...todo, done : true} : todo)
        }
    }
})

export default todoSlice.reducer;
export const {addAction, removeAction, toggleAction} = todoSlice.actions;