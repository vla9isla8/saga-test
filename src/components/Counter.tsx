import * as React from "react";
import Countdown from "./Countdown";

export type CounterProps = {
    counter: number,
    usedDelay: number | undefined,
    add: ()=> void,
    addAsync: (delay: number) => void,
    reset: () => void
}

const Counter = ({counter,usedDelay,add,addAsync,reset}:CounterProps) => {

    const [delay,setDelay] = React.useState(0);

    const onAddAsync = React.useCallback(() => addAsync(delay * 1000),[addAsync,delay]);

    const onChangeDelay = React.useCallback((e) => setDelay(e.target.value),[]);

    return <div>
        <h3>{counter}</h3>    
        <button onClick={add}>Add</button>
        <input type="number" value={delay} onChange={onChangeDelay} />
        <button onClick={onAddAsync} disabled={!!usedDelay}>Add async</button>
        <button onClick={reset}>Reset</button>
        {usedDelay && <Countdown start={usedDelay}/>}
    </div>;
}

export default Counter;