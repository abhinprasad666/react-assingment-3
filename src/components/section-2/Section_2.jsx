import React from 'react'
import mapIcon from '../../asset/section-2-map-Icon.png'
import icon2 from '../../asset/section-2-Icons-2.png'
import icon3 from '../../asset/section-2-Icon-3.png'
import icon4 from '../../asset/section-2-Icon-4.png'
import { Col, Container, Row } from 'react-bootstrap'
import './Section_2.scss'
const Section_2 = () => {
  return (
        <Container className='pt-5'>
            <Row>
                <Col>
                    <h1 className='heading'>How does it work</h1>
                </Col>
            </Row>
            <Row className='section-2 mt-5'>
                <Col  xl={3} md={6} >
                    <ul>
                        <img src={mapIcon} alt="" />
                        <li className='box-1'>Select location</li>
                        <li className='box-2'>Choose the location where your food will be delivered.</li>
                    </ul>
                </Col>

                <Col xl={3} md={6}>
                    <ul>
                        <img src={icon2} alt="" />
                        <li className='box-1'>Choose order</li>
                        <li  className='box-2'>Check over hundreds of menus to pick your favorite food</li>
                    </ul>
                </Col>
                <Col xl={3} md={6}>
                    <ul>
                        <img src={icon3} alt="" />
                        <li className='box-1'>Pay advanced</li>
                        <li  className='box-2'>It's quick, safe, and simple. Select several methods of payment</li>
                    </ul>
                </Col>

                <Col xl={3} md={6}>
                    <ul>
                        <img src={icon4} alt="" />
                        <li className='box-1'>Enjoy meals</li>
                        <li  className='box-2'>Food is made and delivered directly to your home.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
  )
}

export default Section_2
