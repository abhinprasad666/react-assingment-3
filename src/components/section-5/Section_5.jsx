import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import buttonsIcon from '../../asset/search-food-Buttons.png'
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
  </Container>
  )
}

export default Section_5
