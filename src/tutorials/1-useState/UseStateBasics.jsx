import { useState } from "react"

export default function UseStateBasics() {
    const [title, setTitle] = useState("Hello World")

    function handleClick() {
        if (title === "Hello World")
            setTitle("Hello My Title")
        else
            setTitle("Hello World")
    }

    return (
        <>
            <h2>{title}</h2>
            <button className="btn" onClick={handleClick}>Change title</button>
        </>
    )
}