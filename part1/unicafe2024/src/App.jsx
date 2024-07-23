import { useState } from "react";
import "./App.css";

const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

const Stats = ({ good, neutral, bad, avg, positive }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return <h4>Press buttons to see statistics</h4>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <th>Statistics</th>
        </tr>
        <tr>
          <td>Good: {good}</td>
        </tr>
        <tr>
          <td>Neutral: {neutral}</td>
        </tr>
        <tr>
          <td>Bad: {bad}</td>
        </tr>
        <tr>
          <td>Average: {avg}</td>
        </tr>
        <tr>
          <td>Positive: {positive}%</td>
        </tr>
      </tbody>
    </table>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [arrSum, setArrSum] = useState([]);

  const sum = good + bad + neutral;
  const positive = (good * 100) / sum;

  const goodPress = () => {
    setGood(good + 1);
    setArrSum(arrSum.concat(1));
  };
  const neutralPress = () => {
    setNeutral(neutral + 1);
    setArrSum(arrSum.concat(0));
  };
  const badPress = () => {
    setBad(bad + 1);
    setArrSum(arrSum.concat(-1));
  };

  let calcSum = 0;
  for (let i = 0; i < arrSum.length; i++) {
    calcSum += arrSum[i];
  }
  const avg = calcSum / arrSum.length;
  console.log(arrSum);
  return (
    <>
      <h1 className="test">Give feedback</h1>
      <Button name="Good" onClick={goodPress} />
      <Button name="Neutral" onClick={neutralPress} />
      <Button name="Bad" onClick={badPress} />
      <Stats
        good={good}
        neutral={neutral}
        bad={bad}
        positive={positive}
        avg={avg}
      />
    </>
  );
}

export default App;
