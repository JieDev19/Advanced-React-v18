export default function ErrorExample() {
    let title = "random title"

    function handleClick() {
        title = "My Title"
        console.log(title)
    }

    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>Change Title</button>
        </>
    )
}