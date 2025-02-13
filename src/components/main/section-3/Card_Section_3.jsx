import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '../../common/button/Button'
import mapIcon from '../../../asset/map-icon.png'
import './Section-3.scss'

const Card_Section_3 = () => {
  return (
    <Col sm={6} md={4}  lg={3} xl={2} xxl={2}   className='mt-5'>
        <ul className='card-section-3'>
            <img className=' popular-iteam-image' src="https://www.tripsavvy.com/thmb/vxQUOQDaiAmAznek4wU8rcahlXc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-469866881-bdc202ffd80e4f5fbd8b3b18efbe7003.jpg" alt="" />
            <li className='food-name'>Cheese Burger</li>
            <div className='location flex-row'>
                <img src={mapIcon} alt="" />
                <li className='shop-name'>Burger Arena</li>
            </div>
           
            <li className='price'>$3.88</li>
            <Button className='order-btn' name={"Order Now"} />
        </ul>
    </Col>
  )
}

export default Card_Section_3
