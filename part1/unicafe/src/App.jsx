import { useState } from 'react'


const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({funcCount, text}) => {
  return <button onClick={funcCount}>{text}</button>
}

const HeaderParagraph = ({text}) =>{
  return <h2>{text}</h2>
}

const Stats = ({text, count}) => {
  return <p>{text} {count}</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 const goodPress = () =>{
  const newGoodVal = good + 1
  setGood(newGoodVal)
 }

 const neutralPress = () =>{
  const newNeutralVal = neutral + 1
  setNeutral(newNeutralVal)
 }

 const badPress = () =>{
  const newBadVal = bad + 1
  setBad(newBadVal)
 }


  return (
    <div>
      <Header text= "Give Feedback"/>
      <Button funcCount={goodPress} text="Good"/>
      <Button funcCount={neutralPress} text="Neutral"/>
      <Button funcCount={badPress} text="Bad"/>
      <HeaderParagraph text="Statistics"/>
      <Stats text="Good" count={good}/>
      <Stats text="Neutral" count={neutral}/>
      <Stats text="Bad" count={bad}/>
    </div>
  )
}

export default App