/* eslint-disable react/prop-types */
import { useState } from 'react'

// Header component
function Header({name}) {
  return (
      <h1>Belajar React bareng {name ? name : 'WPU'} </h1> // itenary operator, if name is not empty, show name, else show WPU
  )
}

function App() {
  const students = ['Dhika', 'Budi', 'Joko', 'Rudi'];
    const [likes, setLikes] = useState(0); // state with initial value 0

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

export default App
