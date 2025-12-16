import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { TiShoppingCart } from "react-icons/ti";
const CartWidgetRI = () => {
  return (
    <div>
        <TiShoppingCart fontSize={'1.8rem'} />
        <Badge bg="danger">5</Badge>
    </div>
  )
}

export default CartWidgetRI