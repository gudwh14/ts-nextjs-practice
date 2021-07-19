import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counter from "./counter";
import {createWrapper} from "next-redux-wrapper";
import todo, {todoSlice} from "./todo";
import logger from "redux-logger";


// rootReducer 생성 통합 리듀서 만들기
const rootReducer = combineReducers({
    counter : counter,
    todo : todoSlice.reducer
})

// 리듀서를 바탕으로 store 생성하기
const store = () => {
    const store = configureStore({
        reducer : rootReducer,
        middleware : getDefaultMiddleware().concat(logger)
    })
    return store;
}

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper(store,{
    // debug 가 true 면 디버그때 자세한 설명이 나옵니다. (개발할때는 true 로)
    debug: process.env.NODE_ENV === 'development',
});