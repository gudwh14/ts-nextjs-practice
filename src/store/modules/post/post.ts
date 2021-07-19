import {PostType} from "../../../api/post";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PostError = {
    error : string;
}
type PostState = {
    loading : boolean,
    data : PostType[] | null,
    error : PostError | null
}

const initialState : PostState = {
    loading : false,
    data : null,
    error : null
}

export const postSlice = createSlice({
    name : 'post',
    initialState : initialState,
    reducers : {
        getPostRequest(state : PostState) {
            state.loading = true;
            state.data = null;
            state.error = null;
        },
        getPostSuccess(state : PostState, action : PayloadAction<PostType[]>) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        getPostError(state : PostState, action : PayloadAction<PostError>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        }
    }
})

export default postSlice.reducer;
export const {getPostRequest, getPostSuccess, getPostError} = postSlice.actions;