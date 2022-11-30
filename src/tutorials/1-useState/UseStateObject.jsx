import { useState } from "react"

export default function UseStateObject() {
    const [person, setPerson] = useState(
        {
            name: 'jie',
            age: 25,
            message: 'random message'
        }
    )

    function btnMessage() {
        // setPerson(prevState => ({...prevState, message: 'hello world'}))
        if (person.message === 'random message')
            setPerson({...person, message: 'hello world'})
        else
            setPerson({...person, message: 'random message'})
    }
    return (
        <>
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>{person.message}</div>
            <button onClick={btnMessage}>Change message</button>
        </>
    )
}