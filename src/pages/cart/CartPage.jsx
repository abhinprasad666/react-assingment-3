import React from 'react'
import "./CartPage.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const CartPage = () => {

  const {cartCount} =useSelector((state)=>state.cart)
   console.log("your cart is :",cartCount)

  return (
<Container className='cart-box'>
  <Row className='my-5'>
    <Col>
    <center>
    <h1 className='text-dark '>Your Cart  {cartCount} items </h1>
    </center>
    </Col>
  </Row>
    <CartCard cartCount={cartCount}/>
   
</Container>
  )
}

export default CartPage
