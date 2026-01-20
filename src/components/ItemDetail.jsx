import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {
  const onAdd = (cantidad)=> {
    console.log(`Agregaste ${cantidad} del producto ${detail.name}`)
  }
  return (
    <div>
        <h1>Detalle del producto: {detail.name}</h1>
        <img alt={detail.name} src={detail.img}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades disponibles</p>
        <p>Precio: ${detail.price},00</p>
        {/* NO ENTRA EN LA SEGUNDA PRE ENTREGA */}
        <ItemCount stock={detail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail