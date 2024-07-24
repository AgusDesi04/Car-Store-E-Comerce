

function Input({onStateUpLifting}) {

  const handleChange = (e) => {
    onStateUpLifting(e.target.value.length)
  }



  return (
   <input type="text" className='text-white' onChange={handleChange}/>
  )
}

export default Input