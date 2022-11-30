import { useState } from "react"

export default function UseStateArray({data}) {
    const [people, setPeople] = useState(data)

    function btnClear() {
        setPeople([])
    }
    function btnDelete(id) {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }
    return (
        <>
            {
                people.map((person) => (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button className='btn' onClick={() => btnDelete(person.id)}>Delete</button>
                    </div>
                ))
            }
            <button className='btn' onClick={btnClear}>Clear</button>
        </>
    )
}