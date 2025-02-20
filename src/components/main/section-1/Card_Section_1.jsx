import React from 'react'
import { Col} from 'react-bootstrap'
import sampleImage from '../../../asset/meat-1155132.jpg'
import './Section_1.scss'



const Card_Section_1 = ({image,name,randomNumber}) => {
  return (
      <Col xl={3} md={6}>
        <ul className="section-1-card">
          <div className="img-box">
            <img src={image?image:sampleImage} alt="" />
            <div className='price-box'><span className='price'>{randomNumber?randomNumber:5}0</span> <span className="one"><span className='price-2'>%</span> <span className='off'>Off</span></span></div>
          </div>
        
           <li className='category'>{name}</li>
           <li className='remain'>{randomNumber?randomNumber+1:1}Days Remaining</li>
        </ul>
      </Col>
  )
}

export default Card_Section_1
