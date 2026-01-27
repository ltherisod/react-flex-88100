//PARA UTILIZAR LAS HERRAMIENTAS DEL CONTEXTO NECESITO USAR EL HOOK USECONTEXT E IMPORTAR EL CONTEXTO QUE QUIERO USAR
import {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
    // const context = useContext(CartContext)
    // console.log(context, 'context')
    const [purchase, setPurchase]= useState(false)
    const {addItem, cart} = useContext(CartContext)
    console.log(cart,  'cart')
  const onAdd = (cantidad)=> {
    // console.log(`Agregaste ${cantidad} del producto ${detail.name}`)
    addItem(detail,cantidad)
    setPurchase(true)
  }
  return (
    <div>
        <h1>Detalle del producto: {detail.name}</h1>
        <img alt={detail.name} src={detail.img}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades disponibles</p>
        <p>Precio: ${detail.price},00</p>
        {/* NO ENTRA EN LA SEGUNDA PRE ENTREGA */}
       {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail