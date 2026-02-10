import {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({detail}) => {
   
    const [purchase, setPurchase]= useState(false)
    const {addItem, cart, itemQuantity} = useContext(CartContext)
   
  const onAdd = (cantidad)=> {
    addItem(detail,cantidad)
    setPurchase(true)
    Swal.fire(
      {
        position:'top-end',
        icon: 'success',
        title: `Agregaste ${detail.name} al carrito!`,
        showCancelButton:false,
        showConfirmButton:false,
        timer:1200
      }
    )
  }

const stockActualizado= detail.stock - itemQuantity(detail.id)
  return (
    <div>
        <h1>Detalle del producto: {detail.name}</h1>
        <img alt={detail.name} src={detail.img}/>
        <p>{detail.description}</p>
        <p>Stock: {stockActualizado} unidades disponibles</p>
        <p>Precio: ${detail.price},00</p>
       {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail