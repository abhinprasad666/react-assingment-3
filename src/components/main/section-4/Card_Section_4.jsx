import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '../../common/button/Button'
import tagIcon from '../../../asset/tag-Icon.png'
import clockIcon from '../../../asset/time-Icon.png'
import starIcon from '../../../asset/star-Icon.png'
import brand1 from '../../../asset/brand-Image-1.png'
import './Section_4.scss'

const Card_Section_4 = () => {
  return (
   <Col   sm={6} md={4}  lg={3} xl={3} xxl={3} className='mb-5'>
      <ul className='section-4'>
        <div className='img-box '>
          <img className=' w-100' src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg" alt="" />
          <div className="offers flex-row">
             <li className='offer'>
               <img src={tagIcon} alt="" />
                 <span> 20% off</span>
      
          </li>
          <li className='fast'>
            <img src={clockIcon} alt="" />
            <span>  Fast</span>
          </li>
          </div>
        </div>

        <div className='brands flex-row py-4  '>
          <img className='brand-image' src={brand1} alt="" />
          <span className='brandName-rating'>
            <li className='brand-name'>Foodworld</li>
            <li className='rating'><img src={starIcon} alt="" /> 20</li>
          </span>
        </div>
        <Button className='order-now ' status={"close"} name={"Opens tomorrow"} />
    
      </ul>
   </Col>
  )
}

export default Card_Section_4

