import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import Button from '../../common/button/Button'
import mapIcon from '../../../asset/map-icon.png'
import './Section-3.scss'

const Card_Section_3 = ({image,name,randomNumber}) => {



  return (
    <Col sm={6} md={4}  lg={3} xl={2} xxl={2}   className='mt-5'>
        <ul className='card-section-3'>
            <img className=' popular-iteam-image' src={image} alt="" />
            <li className='food-name mb-2'>{name}</li>
            <div className='location flex-row'>
                <img src={mapIcon} alt="" />
                <li className='shop-name'>Burger Arena</li>
            </div>
           
            <li className='price'>${randomNumber}.00</li>
            <Button className='order-btn' name={"Order Now"} />
        </ul>
    </Col>
  )
}

export default Card_Section_3
