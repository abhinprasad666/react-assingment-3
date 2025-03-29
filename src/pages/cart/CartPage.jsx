import React from 'react'
import "./CartPage.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const CartPage = () => {

  const {cartCount,cartList} =useSelector((state)=>state.cart)
   console.log("your cart is :",cartList)

  return (
<Container className='cart-box'>
  <Row className='my-5'>
    <Col>
    <center>
    <h1 className='text-dark '>Your Cart  {cartList.length} items </h1>
    </center>
    </Col>
  </Row>
    <CartCard cartCount={cartCount} cartList={cartList}/>
   
</Container>
  )
}

export default CartPage
