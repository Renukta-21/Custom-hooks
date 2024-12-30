import React from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)

  return {
    increment, decrement, setZero
  }
}

function App() {
  return (
    <div>App</div>
  )
}

export default App