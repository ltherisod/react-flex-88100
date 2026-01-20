import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [nombre, setNombre] = useState('')

    const inputHandler = (e)=> {
        // console.log(e, 'evento')
        // console.log(e.target, 'target')
        // console.log(e.target.value, 'value')
        setNombre(e.target.value)

    }
  return (
    <div>
        <input name='nombre-completo' type='text' placeholder='Ingrese su nombre' onChange={inputHandler}/>
        <p>{nombre}</p>
    </div>
  )
}

export default Input