import {Todo} from "../store/modules/todo";

interface TodoItemProps {
    todo : Todo,
    remove : (id : number) => void,
    toggle : (id : number) => void
}

const TodoItem = ({todo,remove,toggle} : TodoItemProps) => {
    const handleToggle = () => {
        toggle(todo.id);
    }

    const handleRemove = () => {
        remove(todo.id);
    }

    return (
        <div>
            <span onClick={handleToggle}>할일 : {todo.title}</span>
            <span>{todo.done ? "O" : "X"}</span>
            <button onClick={handleRemove}>삭제</button>
        </div>
    )
}

export default TodoItem;