import {useContext}from 'react'
import { CartContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';
import { TiShoppingCart } from "react-icons/ti";
const CartWidgetRI = () => {
const {cart}=useContext(CartContext)
console.log(cart)
  return (
    <div>
        <TiShoppingCart fontSize={'1.8rem'} />
        <Badge bg="danger">5</Badge>
    </div>
  )
}

export default CartWidgetRI