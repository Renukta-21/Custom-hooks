import  { useState } from 'react'

function Countries() {
  const [country, setCountry] = useState('')
    const handleSubmit = ()=>{}
    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="countryInput">Country </label>
            <input type="text" id='countryInput'/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Countries