import { useEffect, useState } from "react"

export default function UseEffectBasics() {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log("call useEffect")
    }, [value])
    console.log("render component")

    function addClick() {
        setValue(value + 1)
    }

    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={addClick}>Add</button>
        </>
    )
}