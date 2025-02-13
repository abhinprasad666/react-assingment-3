import React from 'react'
import './Section_6.scss'
import { Col, Row } from 'react-bootstrap'

const Content = () => {
  return (
 <Row className='section-6'>
     <Col  sm={6} md={6}  lg={6} xl={4} xxl={4} className='mb-5'>
     <ul>
        <li className='heading'>
            <span className='best-deal'>Best deals </span><span className='cripzy'>Crispy Sandwiches</span>
        </li>
        <li className='description'>Enjoy the large size of sandwiches. Complete 
        perfect slice of sandwiches.</li>
       
     </ul>
    
    </Col >
           
     <Col sm={6} md={6}  lg={6} xl={8} xxl={8} className='mb-5'>
             
        <div className='section-6-right'>
        <img className=' w-100' src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg" alt="" />
           </div>
     </Col>
 </Row>

  )
}

export default Content
