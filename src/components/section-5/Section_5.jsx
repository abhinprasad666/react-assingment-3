import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import buttonsIcon from '../../asset/search-food-Buttons.png'
import cardIcon from '../../asset/section-6-Card-img.png'
import Card_section_5 from './Card_section_5'
import './Section_5.scss'
const Section_5 = () => {
  return (
  
  <Container>
    <Row>
        <Col className='search-food-title mb-5'>
         <h1>Search by Food</h1>
         <img src={buttonsIcon} alt="" />
        </Col>
    </Row>
    <Row>
    <Card_section_5/>
    <Card_section_5/>
    <Card_section_5/>
    <Card_section_5/>
    <Card_section_5/>
    <Card_section_5/> 
 
    </Row>

    <Row>
      
    <Col>
               <div>
                  <img className='w-100' src={cardIcon} alt="" />
               </div>
              </Col>
    </Row>
  </Container>
  )
}

export default Section_5
