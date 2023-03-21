import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   10000
  // )

  const Display = (props) =>{
    return(
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.event}>{props.text}</button>
    )
  }

  const increaseClick = () => setCounter (counter +1);
  const decreaseClick = () => setCounter(counter-1)
  const resetClick = () => setCounter(0);

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