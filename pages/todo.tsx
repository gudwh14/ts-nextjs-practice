import useTodo from "../src/store/modules/todoHook";
import TodoList from "../src/components/TodoList";
import TodoAdd from "../src/components/TodoAdd";


const Todo = () => {
    const {todos, add, remove, toggle} = useTodo();

    return (
        <>
            <TodoList todos={todos} remove={remove} toggle={toggle}/>
            <TodoAdd add={add}/>
        </>
    )
}

export default Todo;