import React from 'react'
import './Section_5.scss'
import { Col } from 'react-bootstrap'

const Card_section_5 = () => {
  return (
   <Col  xs={6} sm={6} md={4}  lg={3} xl={2} xxl={2} className='mb-5 col-16'>
    <ul className="serch-food">
        <img className='w-100' src="https://www.preciouscore.com/wp-content/uploads/2021/12/Jollof-Rice-With-Chicken.jpg" alt="" />
        <li className='search-food-name'>Pizza</li>

    </ul>
   </Col>
  )
}

export default Card_section_5
