import React from 'react'

const ItemDetail = ({detail}) => {
  return (
    <div>
        <h1>Detalle del producto: {detail.name}</h1>
        <img alt={detail.name} src={detail.img}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades disponibles</p>
        <p>Precio: ${detail.price},00</p>
    </div>
  )
}

export default ItemDetail