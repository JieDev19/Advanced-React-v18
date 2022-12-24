import { useEffect, useState } from "react"

// api
const url = "https://api.github.com/users"
export default function UseEffectFetchData() {
    const [users, setUsers] = useState([])

    // use to fetch api
    async function getUsers() {
        const res = await fetch(url)
        const users = await res.json()
        console.log(users)
        setUsers(users)
    }


    useEffect(() => {
        getUsers()
    }, [])

    /*useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
            const user = await res.json()
            console.log(user)
            setUsers(user)
        }

        fetchData()
    }, [url])*/


    return (
        <>
            <h3>github users</h3>
            <ul className={"users"}>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url} = user
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt="avatar"/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}