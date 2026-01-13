import React from 'react'
import { Card } from 'react-bootstrap'

const FetchItem = ({pj}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pj.image} />
      <Card.Body>
        <Card.Title>{pj.name}</Card.Title>
        <Card.Text>
       {pj.species}
        </Card.Text>
      
      </Card.Body>
    </Card>
  )
}

export default FetchItem