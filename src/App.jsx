import React, { useState } from 'react'

const useCounter = () => {
  const [value, setvalue] = useState(0)

  const increment = () => setvalue(value + 1)
  const decrement = () => setvalue(value - 1)
  const setZero = () => setvalue(0)

  return {
    value, increment, decrement, setZero
  }
}

function App() {
  const counter = useCounter()

  return (
    <div>
      <p>Counter: {counter.value}</p>
      <button onClick={()=> counter.increment()}>+</button>
      <button onClick={()=> counter.setZero()}>0</button>
      <button onClick={()=> counter.decrement()}>-</button>
    </div>
  )
}

export default App