import { useState } from "react"

export const useCounter = () => {
    const [value, setvalue] = useState(0)
  
    const increment = () => setvalue(value + 1)
    const decrement = () => setvalue(value - 1)
    const setZero = () => setvalue(0)
  
    return {
      value, increment, decrement, setZero
    }
  }