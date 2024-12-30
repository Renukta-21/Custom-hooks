import { useEffect, useState } from "react"

function useCountry(inputValue) {
    const [country, setCountry] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!inputValue) return

        fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${inputValue}`)
        .then(data => {
            if(!data.ok) throw new Error ('Country not found')
            return data.json()
        })
        .then(data => setCountry(data))
        .catch(err=> setError(err.message))
    
    }, [inputValue])
    
    return {
        error, setError, country, setCountry
    }
}

export default useCountry