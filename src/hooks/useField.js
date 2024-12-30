import { useState } from "react"

function useField(type) {
    const [value, setvalue] = useState('')

    const onChange = (e) => {
        setvalue(e.target.value)
    }

    return {
        type, value, onChange
    }
}

export default useField