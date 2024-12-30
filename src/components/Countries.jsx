import { useState } from 'react'
import useField from '../hooks/useField'

function Countries() {
    const [country, setCountry] = useState(null)
    const [error, setError] = useState(null)

    const nameInput = useField('text')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        setCountry(null)
        fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${nameInput.value}`)
            .then(data => {
                if(!data.ok) throw new Error ('No se hallo xd')
                return data.json()
            })
            .then(data => setCountry(data))
            .catch(err=> setError(err.message))
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input {...nameInput} />
                <button>Search</button>
            </form>
            <Country country={country}/>
            <ErrorMessage error={error}/>
        </div>
    )
}
const ErrorMessage = ({error})=>{
    if(!error)return null
    
    return<p>{error}</p>
}

const Country = ({country}) => {
    if (!country) return null

    return (
        <div style={{ width: '300px', overflow: 'hidden', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <div style={{ width: '100%' }}>
                <img
                    src={country.flags.svg}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <h2>{country.name.common}</h2>
            <p>{country.name.official}</p>
            <ul>
                <li>Population: {country.population}</li>
                <li>Timezones: {country.timezones}</li>
            </ul>
        </div>

    )
}
export default Countries