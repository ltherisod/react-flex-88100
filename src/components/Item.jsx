import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({producto}) => {
    console.log(producto)
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
         ${producto.price},00
        </Card.Text>
        <Button variant="primary">Ver Más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item