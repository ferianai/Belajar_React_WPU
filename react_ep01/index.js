const container = document.getElementById('root'); // get element with id root
const root = ReactDOM.createRoot(container); // create root with container

// Header component
function Header({name}) {
    return (
        <h1>Belajar React bareng {name ? name : 'WPU'} </h1> // itenary operator, if name is not empty, show name, else show WPU
    )
}

function HomePage() {
    const students = ['Dhika', 'Budi', 'Joko', 'Rudi'];
    const [likes, setLikes] = React.useState(0); // state with initial value 0

    // function to handle click event
    function handleClick() {
        setLikes(likes + 1);
    }

    // return JSX to render to the DOM and // button to handle click event and show likes
    return (
        <div>
            <Header name='Pak Dhika'/>
            <ul>
                {students.map((eachStudent) => (
                    <li key={eachStudent}>{eachStudent}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button> 
        </div>
    )
}

root.render(<HomePage />); // render Header component to root

    
    