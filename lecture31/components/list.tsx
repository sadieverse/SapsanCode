import { useEffect, useState } from "react"

export const List = () => {
    const [names, setNames] = useState(['smth', 'smth2', 'smth3']);
    const [text, setText] = useState('');

    const addNewName = () => {
        setNames([...names, text]);
    }

    useEffect(() => console.log('effected'), [names]);

    return(
        <>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={addNewName}>Add</button>
        {names.map((name)=> <h1>{name}</h1>)}
        </>
    )
}