import React from 'react'
import './Section_5.scss'
import { Col } from 'react-bootstrap'

const Card_section_5 = ({image,name}) => {
  return (
   <Col  xs={6} sm={6} md={4}  lg={3} xl={2} xxl={2} className='mb-5 col-16'>
    <ul className="serch-food">
        <img className='w-100' src={image} alt="" />
        <li className='search-food-name'>{name}</li>

    </ul>
   </Col>
  )
}

export default Card_section_5
