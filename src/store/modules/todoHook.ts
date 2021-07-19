import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./index";
import {addAction, removeAction, toggleAction} from './todo';


const useTodo = () => {
    const todos = useSelector((state:RootState)=> state.todo);
    const dispatch = useDispatch();

    const add = (title : string) => {
        dispatch(addAction(title));
    }

    const remove = (id : number) => {
        dispatch(removeAction(id));
    }

    const toggle = (id : number) => {
        dispatch(toggleAction(id))
    }

    return {todos, add, remove , toggle}
}

export default useTodo;