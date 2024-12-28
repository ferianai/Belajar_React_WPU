/* eslint-disable react/prop-types */

// Header component
export default function Header({name}) {
  return (
      <h1>Belajar React bareng {name ? name : 'WPU'} </h1> // itenary operator, if name is not empty, show name, else show WPU
  )
}