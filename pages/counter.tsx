import useCounter from "../src/store/modules/counterHook";
import {useState} from "react";

const Counter = () => {
    const {counter , increase, decrease , increaseBy} = useCounter();
    const [diff, setDiff] = useState<number>(0);

    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={increase}>+ 1</button>
            <button onClick={decrease}>- 1</button>
            <div>
                <input type="number" value={diff} onChange={(e)=>setDiff(Number(e.target.value))}/>
                <button onClick={()=>increaseBy(diff)}>+ {diff}</button>
            </div>
        </>
    )
}
export default Counter;