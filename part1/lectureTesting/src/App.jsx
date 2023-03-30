import { useState } from 'react'


const Button = ({event, text}) => <button onClick={event}>{text}</button>

const Display = ({counter}) =>{
  return(
    <div>{counter}</div>
  )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log("rendering with counter value", counter)

  const increaseClick = () => {
    console.log("increasing, value before", counter)
    setCounter (counter +1)
  }
  const decreaseClick = () => {
    console.log("decreasing, value before", counter)
    setCounter(counter-1)
  }
  const resetClick = () => {
    console.log("resetting to zero, value before", counter)
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button event={increaseClick} text="Add"/>
      <Button event={decreaseClick} text="Subtract"/>
      <Button event={resetClick} text="Reset"/>
    </div>
  )
}

export default App