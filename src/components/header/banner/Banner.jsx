import React from 'react'
import handBag from "../../../asset/picup-Icon.png"
import serchIcon from "../../../asset/banner-search-icon.png"
import mapIcon from "../../../asset/map-icon.png"
import deliveryIcon from "../../../asset/delivery-bike-Icon.png"
import { Col,Row, Container } from 'react-bootstrap'
import './Banner.scss'

const Banner = (props) => {
  return (
    <div className='banner'>
      <Container className='fluid'>
        <Row>
          <Col  xl={7}  xs={12}>
          <div className='banner-left-section '>

          <h1 className='col-xs-text-center'>Are you starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
          <div className='picup-find-food'>

                <ul  className='picup flex-row'>
                   <li className='delivery'>
                    <img src={deliveryIcon} alt="" />
                    Delivery
                   </li>
                   <li className='hand-bag-box'><img src={handBag} alt="" /> Picup</li>
                   </ul>

                   <ul className='find-food'>
                    <span>
                      <img src={mapIcon} alt="" />
                    <input  className='col-xl-9 col-md-9 col-xs-6' type="text" name="" id="" placeholder='Enter Your Address' />
                    </span>
                    
                    <button className='picup-btn'><img src={serchIcon} alt="" />Find Food</button>

                   </ul>
          </div>
          </div>
          </Col>

          <Col xl={5}  xs={12} className='banner-col '>
          <div className="banner-right-section">
           <div className='hero-image'>
            <img  src={props.image?props.image:"Loding"} alt="" />
           </div>
           </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Banner
