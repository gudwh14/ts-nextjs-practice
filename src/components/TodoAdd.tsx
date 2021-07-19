import {FormEvent, useState} from "react";

interface TodoAddProps {
    add : (title : string) => void
}

const TodoAdd = ({add} : TodoAddProps) => {
    const [title, setTitle] = useState("");

    const handleAdd = (event : FormEvent) => {
        event.preventDefault();
        add(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleAdd}>
            <input type='text' placeholder="Todo 를 입력해 주세요." value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button type="submit" >추가</button>
        </form>
    );
};

export default TodoAdd;