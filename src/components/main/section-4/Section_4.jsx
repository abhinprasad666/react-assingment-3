import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card_Section_4 from './Card_Section_4.JSX'
import Button from '../../common/button/Button'
import arrowIcon from '../../../asset/arrow-Icon.png'
import './Section_4.scss'

const Section_4 = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
        <div className="featured-title flex-row mb-5">
        <h1>Featured Restaurants</h1>
        </div>
       
        </Col>
      </Row>
        <Row>
           <Card_Section_4/>
           <Card_Section_4/>
           <Card_Section_4/>
           <Card_Section_4/>
        </Row>
        <Row className='my-5'>
          <Col >
          <div className="viewAll">
          <Button name={"View All "}  status={"view"}> <img src={arrowIcon} alt="" /></Button>
    
          </div>
             
          </Col>
        </Row>
    </Container>
  )
}

export default Section_4
