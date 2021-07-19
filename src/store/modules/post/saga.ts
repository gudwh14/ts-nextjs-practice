import {getPosts, PostType} from "../../../api/post";
import {call, put , takeEvery} from 'redux-saga/effects';
import {getPostRequest, getPostSuccess, getPostError} from './post';

function* getPostSaga() {
    try {
        const posts : PostType[] = yield call(getPosts); // call 함수를 이용해 API 호출
        yield put(getPostSuccess(posts)); // put 함수로 다음 액션 실행하기
    }
    catch (e) {
        yield put(getPostError({error : "에러발생!!!"}));
    }
}

export function* postSaga () {
    yield takeEvery(getPostRequest.type,getPostSaga);
}