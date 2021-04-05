import React, { useState } from 'react'

const DisplayQuote = ({anecdote, votes}) => {
  return (
    <div>
      {anecdote}
      <p>Has {votes} Votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteArray, setVote] = useState(Array(6).fill(0))

  const newHandler = () => {
    let selector = Math.floor(Math.random() * 6)
    setSelected(selector)
  }

  const voteHandler = () => {
    let voteCopy = [...voteArray]
    voteCopy[selected] += 1
    setVote(voteCopy)
  }

  let highVote = 0
  let highQuote = null
  for (let i = 0; i < voteArray.length; i++){
    if (voteArray[i] > highVote) {
      highQuote = i
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <div>
        <p>has {voteArray[selected]} votes</p>
        <button onClick={voteHandler}>vote for quote</button>
        <button onClick={newHandler}>new quote</button>
      </div>
      <div>
        <h1>Anecdote with most Votes</h1>
        <DisplayQuote anecdote={anecdotes[highQuote]} votes={voteArray[highQuote]}/>
      </div>
    </div>
  )
}

export default App