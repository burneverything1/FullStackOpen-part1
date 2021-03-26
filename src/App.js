import React, { useState } from 'react'

const Statistic = ({text, stat}) => <tr><th>{text}</th><td>{stat}</td></tr>

const Button = ({handler, text}) => (
  <button onClick={handler}>
    {text}
  </button>
)

const Statistics = ({good, bad, neutral}) => {
  let average = (good - bad)/(good + bad + neutral)
  let positivepercent = (good/(good + bad + neutral)) * 100

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <p>No Feedback Given</p>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text={'Good'} stat={good}/>
        <Statistic text={'Neutral'} stat={neutral}/>
        <Statistic text={'Bad'} stat={bad}/>
        <tr><th>Average</th><td>{average}</td></tr>
        <tr><th>Positive</th><td>{positivepercent}%</td></tr>
      </tbody>
    </table>
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
        <Button handler={goodHandler} text={'good'}/>
        <Button handler={neutralHandler} text={'neutral'}/>
        <Button handler={badHandler} text={'bad'}/>
      </div>
      <h1>statistics</h1>
      <Statistics bad={bad} good={good} neutral={neutral}/>

    </div>
  )
}

export default App