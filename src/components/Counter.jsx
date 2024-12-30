import { useCounter } from "../hooks/useCounter"

function Counter() {
    const counter = useCounter()

    return (
      <div>
        <p>Counter: {counter.value}</p>
        <button onClick={ counter.increment}>+</button>
        <button onClick={ counter.setZero}>0</button>
        <button onClick={counter.decrement}>-</button>
      </div>
    )
}

export default Counter