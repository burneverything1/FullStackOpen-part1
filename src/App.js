import React, { useState } from 'react'

const Display = (props) => <p>{props.text} {props.value}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good + 1)
  const neutralHandler = () => setNeutral(neutral + 1)
  const badHandler = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={goodHandler}>good</button>
        <button onClick={neutralHandler}>neutral</button>
        <button onClick={badHandler}>bad</button>
      </div>
      <h1>statistics</h1>
      <Display text={'good'} value={good}/>
      <Display text={'neutral'} value={neutral}/>
      <Display text={'bad'} value={bad}/>
    </div>
  )
}

export default App