import {Todo} from "../store/modules/todo";
import TodoItem from "./TodoItem";

interface TodoItemProps {
    todos : Todo[],
    remove  : (id : number) => void,
    toggle : (id : number) => void
}

const TodoList = ({todos, remove, toggle} : TodoItemProps) => {
    return (
        <>
            {todos.map((todo)=>
                <TodoItem key={todo.id} todo={todo} remove={remove} toggle={toggle}/>
            )}
        </>
    );
};

export default TodoList;