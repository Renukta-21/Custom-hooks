import { useState } from 'react'
import useField from '../hooks/useField'
import useCountry from '../hooks/useCountry'

function Countries() {
    const nameInput = useField('text')
    const [name, setName] = useState(null)
    const {error, setError, country, setCountry} = useCountry(name)

    const handleSubmit = (e) => {
        e.preventDefault()
        setCountry(null)
        setError(null)
        setName(nameInput.value)
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