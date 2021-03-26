import React, { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  let average = (good - bad)/(good + bad + neutral)
  let positivepercent = (good/(good + bad + neutral)) * 100

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <p>No Feedback Given</p>
    )
  }
  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Average {average}</p>
      <p>Positive {positivepercent}%</p>
    </div>
  )
}

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
      <Statistics bad={bad} good={good} neutral={neutral}/>

    </div>
  )
}

export default App