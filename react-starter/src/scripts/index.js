import '../styles/index.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter, title }) =>
<>
<h1>{title}</h1>
<div>{counter}</div>
<hr />
</>

const Button = ({ children, handle }) =>
<button onClick={handle}>{children}</button>

const App = () => {
  const [ increase, increased ] = useState(0)
  const [ decrease, decreased ] = useState(0)
  const [ clicks, clicked ] = useState(0)

  setTimeout(() => increased(increase + 1), 1000)
  setTimeout(() => decreased(decrease - 1), 1000)

  const handleAddition = clicks => () => clicked(clicks)
  const handleSubtraction = clicks => () => clicked(clicks)
  const handleReset = clicks => () => clicked(clicks)

  return (
    <>
      <Display counter={increase} title="Automatic increase" />
      <Display counter={decrease} title="Automatic decrease" />
      <Display counter={clicks} title="Increment by click" />
      <Button handle={handleAddition(clicks + 1)}>&#43;</Button>
      <Button handle={handleSubtraction(clicks - 1)}>&#45;</Button>
      <Button handle={handleReset(0)}>Reset</Button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
