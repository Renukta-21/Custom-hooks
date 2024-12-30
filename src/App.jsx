import React, { useState } from 'react'
import { useCounter } from './hooks/useCounter'
import Counter from './components/Counter'
import Form from './components/Form'
import Countries from './components/Countries'

function App() {
  return (
    <>
      <Countries />
      {/* <Form /> */}
      {/* <Counter/> */}
    </>

  )
}

export default App