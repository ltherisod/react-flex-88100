import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
   
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
         ${producto.price},00
        </Card.Text>
       {/* <Link to={'/item/'+producto.id} className='btn btn-dark'>Ver Más</Link> */}
        <Link to={`/item/${producto.id}`} className='btn btn-dark'>Ver Más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item