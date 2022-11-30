import { useState } from "react"

export default function UseStateCounter() {
    const [value, setValue] = useState(0)

    function btnReset() {
        setValue(0)
    }
    function btnIncrease() {
        setValue(value + 1)
    }
    function btnDecrease() {
        if (value === 0)
            setValue(0)
        else
            setValue(value - 1)
    }
    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={btnDecrease}>Decrease</button>
                <button className='btn' onClick={btnReset}>Reset</button>
                <button className='btn' onClick={btnIncrease}>Increase</button>
            </section>
        </>
    )
}