import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   10000
  // )

  const handleClick = () => setCounter (counter +1);
  const resetClick = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>Add</button>
      <button onClick={resetClick}>Reset</button>
    </div>
  )
}

export default App