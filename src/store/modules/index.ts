import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import counter from "./counter";
import {createWrapper} from "next-redux-wrapper";
import todo from "./todo";
import logger from "redux-logger";
import {all} from 'redux-saga/effects';
import {postSaga} from "./post/saga";
import createSagaMiddleware, {Task} from "@redux-saga/core";
import post from "./post/post";

interface SagaStore extends Store {
    sagaTask?: Task;
}

// rootReducer 생성 통합 리듀서 만들기
const rootReducer = combineReducers({
    counter : counter,
    todo : todo,
    post : post
})

// 리듀서를 바탕으로 store 생성하기
const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer : rootReducer,
        middleware : getDefaultMiddleware().concat(sagaMiddleware).concat(logger)
    });

    // Next Redux Toolkit 에서 saga 를 사용해야할 때
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export type RootState = ReturnType<typeof rootReducer>;

export default function* rootSaga() {
    yield all([postSaga()]);
}

export const wrapper = createWrapper(store,{
    // debug 가 true 면 디버그때 자세한 설명이 나옵니다. (개발할때는 true 로)
    debug: process.env.NODE_ENV === 'development',
});