import { useState } from 'react'
import api from '../mocks/api.json'

function Countries() {
    const [country, setCountry] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(country)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="countryInput">Country </label>
                <input type="text" id='countryInput' value={country} onChange={(e) => setCountry(e.target.value)} />
                <button>Search</button>
            </form>
            <Country />
        </div>
    )
}

const Country = () => {
    return (
        <div style={{ width: '300px', overflow: 'hidden', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <div style={{ width: '100%'}}>
                <img
                    src={api.flags.svg}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <h2>{api.name.common}</h2>
            <p>{api.name.official}</p>
            <ul>
                <li>Population: {api.population}</li>
                <li>Timezones: {api.timezones}</li>
            </ul>
        </div>

    )
}
export default Countries