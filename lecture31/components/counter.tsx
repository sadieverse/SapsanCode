import { useEffect, useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(' ');

    useEffect(() => console.log('effected'), [text]);

    return(
        <>
        <button onClick={() => setCount(count + 1)}><strong>+</strong></button>
        <h1>{count}</h1>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <h1>{text}</h1>

        </>
        
    )
}