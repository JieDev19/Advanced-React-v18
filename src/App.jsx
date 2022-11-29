import Setup from "./tutorials/1-useState/UseStateArray.jsx"

function App() {
    const data = [
        {id: 1, name: "john"},
        {id: 2, name: "peter"},
        {id: 3, name: "susan"},
        {id: 4, name: "anna"},
    ]
    return (
        <div className="container">
            <Setup/>
        </div>
    )
}

export default App