import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '../../common/button/Button'
import tagIcon from '../../../asset/tag-Icon.png'
import clockIcon from '../../../asset/time-Icon.png'
import starIcon from '../../../asset/star-Icon.png'
import './Section_4.scss'
import brand3 from '../../../asset/brand-Image-3.png'
import placeHolder from '../../../asset/placeHolder.jpeg'



const Card_Section_4 = ({image,randomNumber}) => {


  return (
   <Col   sm={6} md={4}  lg={3} xl={3} xxl={3} className='mb-5'>
      <ul className='section-4'>
        <div className='img-box '>
          <img className=' w-100' src={image?image:placeHolder} alt="" />
          <div className="offers flex-row">
             <li className='offer'>
               <img src={tagIcon} alt="" />
                 <span> {randomNumber?randomNumber:0}0% off</span>
      
          </li>
          <li className='fast'>
            <img src={clockIcon} alt="" />
            <span>  Fast</span>
          </li>
          </div>
        </div>

        <div className='brands flex-row py-4  '>
          <img className='brand-image' src={brand3} alt="" />
          <span className='brandName-rating'>
            <li className='brand-name'>{}Foodworld</li>
            <li className='rating'><img src={starIcon} alt="" /> {randomNumber}0</li>
          </span>
        </div>
    
        <Button className='order-now ' status={randomNumber<4?"close" :"open"} name= {randomNumber<4 ?"Opens tomorrow" :"Open Now"}/>
    
      </ul>
   </Col>
  )
}

export default Card_Section_4

