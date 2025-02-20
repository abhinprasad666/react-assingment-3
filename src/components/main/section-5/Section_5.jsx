import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import buttonsIcon from '../../../asset/search-food-Buttons.png'
import cardIcon from '../../../asset/section-6-Card-img.png'
import Card_section_5 from './Card_section_5'
import { AllDishes } from '../../Context/AllDishesContext'
import './Section_5.scss'




const Section_5 = () => {


  const allDishes=useContext(AllDishes)

  const maxDishes=6

  const allFoods=allDishes?.map((dishes,length)=>{
    if(length<maxDishes){
      return (<Card_section_5 image={dishes.strMealThumb} name={dishes.strMeal} />)
    }
  })

  return (

  <Container>
    <Row>
        <Col className='search-food-title mb-5'>
         <h1>Search by Food</h1>
         <img src={buttonsIcon} alt="" />
        </Col>
    </Row>
    <Row>
   
 {allFoods}
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
