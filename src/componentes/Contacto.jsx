import React, { useState } from 'react'
import Boton from './Button'
import Input from './Input'

function Contacto() {

  // COMPONENTE PARA PRUEBDA DE STATE UPLIFTING, 
  // PASAR ELEMENTOS DE UN COMPONENTE HIJO A UN COMPONENTE PADRE

  const [data, setData] = useState(0)
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleStateUpLifting = (long) => {
    setData(long)
    if(long > 10){
      setError(true)
    }else{
      setError(false)
    }

  }

  return (
    <div>
      <h2 className='text-white'>Contacto:</h2>
      <p className='text-white'>Para que nos pongamos en contacto con usted, llene este formulario y nos pondremos en contacto!</p>
      <form onSubmit={handleSubmit}>
        {error ? <p className='text-red-600 font-bold'>El input no puede contener mas de 10 caracteres</p> : null}
        <label className='text-white'>Nombre</label>
        <Input onStateUpLifting={handleStateUpLifting} />
        <Boton>Enviar</Boton>
      </form>
    </div>
  )
}

export default Contacto