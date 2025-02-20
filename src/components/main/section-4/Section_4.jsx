import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card_Section_4 from './Card_Section_4.JSX'
import Button from '../../common/button/Button'
import arrowIcon from '../../../asset/arrow-Icon.png'
import { AllDishes } from '../../Context/AllDishesContext'
import './Section_4.scss'





const Section_4 = () => {
  
 

  const maxDishes=8

  const allDishes=useContext(AllDishes)
 



 const allFoods=allDishes?.map((res,length)=>{
       
        if(length<maxDishes){
          
            //create randum number
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        if(randomNumber===10){
        randomNumber=5
           }

          return(
            <Card_Section_4  key={res.idMeal} image={res.strMealThumb} name={res.strMeal} randomNumber={randomNumber} />
          )
        }
 })


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
        {allFoods}
          
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
