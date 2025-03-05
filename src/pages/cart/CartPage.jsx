import React from 'react'
import "./CartPage.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CartCard from './CartCard'

const CartPage = () => {
  return (
<Container className='cart-box'>
  <Row className='my-5'>
    <Col>
    <center>
    <h1 className='text-dark '>Your Cart  4 items </h1>
    </center>
    </Col>
  </Row>
    <CartCard/>
</Container>
  )
}

export default CartPage
