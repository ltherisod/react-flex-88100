import {useContext}from 'react'
import { CartContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';
import { TiShoppingCart } from "react-icons/ti";
const CartWidgetRI = () => {
const {cart, cartQuantity}=useContext(CartContext)

  return (
    <div>
        <TiShoppingCart fontSize={'1.8rem'} />
        {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  )
}

export default CartWidgetRI