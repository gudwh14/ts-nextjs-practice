/*
    Container Component 를 따로 만들어주는것이 아니라
    Custom Hook 을 만들어서 사용한다
 */

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./index";
import {increaseAction, decreaseAction, increaseByAction} from "./counter"
import {useCallback} from "react";

const useCounter = () => {
    const counter = useSelector((state: RootState) => state.counter.counter);
    const dispatch = useDispatch();

    const increase = useCallback(() => {
        dispatch(increaseAction());
    },[])

    const decrease = useCallback(() => {
        dispatch(decreaseAction());
    },[])

    const increaseBy = useCallback((diff : number) => {
        dispatch(increaseByAction(diff));
    },[])

    return { counter, increase, decrease , increaseBy }
}

export default useCounter;