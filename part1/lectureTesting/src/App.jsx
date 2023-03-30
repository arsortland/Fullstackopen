import { useState } from 'react'

const Button = ({func, name}) =>{
  return <button onClick={func}>{name}</button>
}

const History = ({allClicks}) => {
  if (allClicks.length === 0){
    return <div>
      Press a button to use the app.
    </div>
  }
  return <div> Press history: {allClicks.join(" ")}</div>
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () =>{
    setAll(allClicks.concat("L"))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
      {left}
      <Button func={handleLeftClick} name="left"/>
      <Button func={handleRightClick} name="right"/>
      {right}
      <p>total {total}</p>
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App