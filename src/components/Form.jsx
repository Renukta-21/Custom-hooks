import useField from "../hooks/useField"

function Form() {
  const name = useField('text')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name.value)
  }
    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input {...name} />
            <button>saas</button>
        </form>
    </div>
  )
}

export default Form