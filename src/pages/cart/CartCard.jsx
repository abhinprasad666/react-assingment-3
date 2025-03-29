import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import deleteIcon from '../../asset/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, deleteIteam, increment } from '../../redux/slices/cart'



const CartCard = ({cartCount,cartList}) => {


const dispatch=useDispatch()
const {price}=useSelector((state)=>state.cart)
const [itemPrice,setItemPrice]=useState(0)

//mapping cartIteams

const cartItems=cartList?.map((cartItem)=>{
                
  return(
    
    <Row className='my-5 ' key={cartItem.idMeal}>
  
    <Col>
         <ul className='left'>
            <li>
              <img className='w-100' src={cartItem.strMealThumb} alt="" />
            </li>

            <li className='dish-name'>
               {cartItem.strMeal}
            </li>
         </ul>
    </Col>

<Col>
     <ul className='right'>
     <div className='price-box'>
      <li>Price</li>
      <li>${cartItem.idMeal-52730}</li>
     </div>

     <div className='quantity-box'>
      <li>Quantity</li>
       <div className='flex-row quantity'>
        <li className='increment' onClick={()=>dispatch(increment(cartItem.idMeal))}>+</li>
        <li className='count'>{cartItem.count}</li>
        <li className='decrement' onClick={()=>dispatch(decrement(cartItem.idMeal))}>-</li>
       </div>
     </div>

     <div className='total-box'>
      <li>Total</li>
      <li>0000</li>
      <li className='delete' onClick={()=>dispatch(deleteIteam(cartItem.idMeal))}><img className='w-100' src={deleteIcon} alt="" /></li>
     </div>
     </ul>

</Col>
<hr />

</Row>
  )
})


  return (
    <div>
         {cartItems}
    </div>
  )
}

export default CartCard
