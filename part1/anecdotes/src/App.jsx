import { useState } from 'react'


const Button = ({func, text}) =>{
  return <button onClick={func}>{text}</button>
}

const MostVoted = ({arrayAnecdotes, arrayVotes}) =>{
  const sum = arrayVotes.reduce((partialSum, a) =>  partialSum + a, 0)
  if (sum === 0){
    return (
      <div>
        No anecdotes have been voted for.
      </div>
    )
  }
  const highestIndex = arrayVotes.indexOf(Math.max(...arrayVotes))
  return(
    <div>
      <h3>Anecdotes with most votes</h3>
      {arrayAnecdotes[highestIndex]}
    </div>
  )


}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const voteArr = new Array(anecdotes.length).fill(0)
  // const copyArr = [...voteArr]
  const [vote, upVote] = useState(voteArr)


 const randomAnecdote = () =>{
  const newSelected = Math.floor(Math.random() * anecdotes.length)
  return setSelected(newSelected)
 }

 const voteAnecdote = () =>{
  //From https://stackoverflow.com/questions/67123442/how-do-i-increment-the-count-of-a-selected-index-of-state-object-using-setstate
  return upVote(current => Object.assign([], current, {
    [selected]: current[selected] + 1
  }));
 }

  return (
    <div>
      <h3>Anecdotes of the day</h3>
      {anecdotes[selected]}
      <p>Vote(s): {vote[selected]}</p>
      <br/>
      <Button func={randomAnecdote} text="Random Anecdote"/>
      <Button func={voteAnecdote} text="Vote"/>
      <MostVoted arrayAnecdotes={anecdotes} arrayVotes={vote}/>
    </div>
  )
}

export default App