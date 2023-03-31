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

const StatisticLine = ({text, count}) => {
  return <p>{text} {count}</p>
}

const Statistics = ({array, count, count1, count2, count3, count4, count5}) => {
  if (array === 0){
    return <div>No feedback received</div>
  }
  return (
    <div>
    <StatisticLine text={"Good"} count={count}/>
    <StatisticLine text={"Neutral"} count={count1}/>
    <StatisticLine text={"Bad"} count={count2}/>
    <StatisticLine text={"Total Presses"} count={count3}/>
    <StatisticLine text={"Average"} count={count4}/>
    <StatisticLine text={"Positive clicks in %"} count={count5}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, setScore] = useState([])

 const goodPress = () =>{
  const newGoodVal = good + 1
  setTotal(newGoodVal+neutral+bad)
  setGood(newGoodVal)
  setScore(sum.concat(1))
 }

 const neutralPress = () =>{
  const newNeutralVal = neutral + 1
  setTotal(newNeutralVal+bad+good)
  setNeutral(newNeutralVal)
  setScore(sum.concat(0))
 }

 const badPress = () =>{
  const newBadVal = bad + 1
  setTotal(newBadVal+good+neutral)
  setBad(newBadVal)
  setScore(sum.concat(-1))
 }

 //AVG:
 const arrSum = sum.reduce((a, b) => {
  return a + b;
}, 0);

 let avg = 0
 if (sum.length === 0){
  avg = 0
 }else{
  avg = arrSum/sum.length
 }

 //Percent of Positive (good clicks)%
 const positivePercent = good/sum.length*100


  return (
    <div>
      <Header text= "Give Feedback"/>
      <Button funcCount={goodPress} text="Good"/>
      <Button funcCount={neutralPress} text="Neutral"/>
      <Button funcCount={badPress} text="Bad"/>
      <HeaderParagraph text="Statistics"/>
      <Statistics array={sum.length}
      count={good}
      count1={neutral}
      count2={bad}
      count3={total}
      count4={avg}
      count5={positivePercent}
      />
    </div>
  )
}

export default App