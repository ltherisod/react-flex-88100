import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const {cart, removeItem, clear, total}= useContext(CartContext)
  return (
    <div>
        <h1>Tu carrito 🛒</h1>
    <div>
        {cart.map((compra)=>(
            <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                <span>{compra.name}</span>
                <span>${compra.price}</span>
                <span>cantidad: {compra.quantity}</span>
                <span>precio final: ${compra.price * compra.quantity}</span>
                <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
            </div>
        ))}
    </div>
    {/* LLAMAR Y ARMAR UNA FUNCION EN CONTEXTO QUE DEVUELVA UN RESULTADO DE TOTAL A PAGAR */}
    <span>Total a pagar: $</span>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
        <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
        <button className='btn btn-success'>Terminar compra</button>
    </div>
    </div>
  )
}

export default CartView