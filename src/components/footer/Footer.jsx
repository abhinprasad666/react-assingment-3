import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Button from '../common/button/Button'
import instagram from '../../asset/instagram-icon.png'
import facebook from '../../asset/faceboock-icon.png'
import twitter from '../../asset/twitter-icon.png'
import envelopeIcon from '../../asset/envelope-icon.png'
import './Footer.scss'

const Footer = () => {
  return (
  <Container fluid className='footer'>

     <Row>
      <Col className='city-heading'><li >Our top cities</li></Col>
      </Row>

      <Row className="box-1">
         <Col className='m-3'>
          
         <div> 
                <li>San Francisco</li>
                <li>Miami</li>
                <li>San Diego</li>
                <li>East Bay</li>
                <li>Long Beach</li>
               </div>
         </Col>
         <Col  className='m-3'>
          
         <div>
                <li>Los Angeles</li>
                <li>Washington DC</li>
                <li>Seattle</li>
                <li>Portland</li>
                <li>Nashville</li>
               </div>
         </Col>
         <Col  className='m-3'>
           
         <div>
                <li>Orange County</li>
                <li>New York City</li>
                <li>Atlanta</li>
                <li>Charlotte</li>
                <li>Denver</li>
               </div>
         </Col>
         <Col  className='m-3'>
         <div>
                <li>Chicago</li>
                <li>Phoenix</li>
                <li>Las Vegas</li>
                <li>Sacramento</li>
                <li>Oklahoma City</li>
               </div>
         </Col>
         <Col  className='m-3'>
         <div>
                <li>Columbus</li>
                <li>New Mexico</li>
                <li>Albuquerque</li>
                <li>Sacramento</li>
                <li>New Orleans</li>
               </div>
         </Col>
      </Row>

      
      <Row className="box-2 mt-5">
        <Col>
        <div>
                <li className='company'>Company</li>
                <li>About us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Blog</li>
             </div>
        </Col>
            
          <Col>
          <div>
                <li className='contact'>Contact</li>
                <li>Help & Support</li>
                <li>Partner with us </li>
                <li>Ride with us</li>
             </div>
          </Col>
           
        <Col>
           
        <div>
                <li className='legal'>Legal</li>
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
             </div>
        </Col>

        <Col>
        <div className='container-2'>
               
                 <li className='follow-us'>Follow Us</li>
                 <li className='social-media'>
                    <img src={instagram} alt="" /> <img src={facebook} alt="" /> <img src={twitter} alt="" />
                 </li>
                 <li className='mailbox-description py-3'>Receive exclusive offers in your mailbox</li>
                 <li className='envelop-box'>
                    <div className="envelop">
                    <img src={envelopeIcon} alt="" />
                    <input type="text" placeholder='Enter Your Email' />
                    </div>
                    
                    <Button  name={'Subscribe'}/>
                 </li>
            </div>
        </Col>

       
      </Row>

      
      <Row className='mt-5'>
         <Col>
         <div className='box-3'>
                <div className=' flex-row'>
                <li> All rights Reserved copyright</li>
                <li className='ms-2 your-company'>Your Company, 2025</li>
                </div>
                <div>
                    <li >Made with  by <span className='themewagon'>Themewagon</span></li>
                </div>
            </div>
         </Col>
      </Row>
  </Container>
  )
}

export default Footer
