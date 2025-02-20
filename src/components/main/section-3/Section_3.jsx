import React, { useContext } from 'react'
import { Container,Row } from 'react-bootstrap'
import Card_Section_3 from './Card_Section_3'
import { AllDishes } from '../../Context/AllDishesContext'

const Section_3 = () => {

  const allDishes=useContext(AllDishes)

  const maxDish=6

  const allFoods= allDishes ?.map((res,length)=>{
          
    if(length<maxDish){
      //create randum number
let randomNumber = Math.floor((Math.random() * 10) + 1);
      return(
        <Card_Section_3 key={res.idMeal} image={res.strMealThumb} name={res.strMeal} randomNumber ={randomNumber }/>
      )
    }
  })





  return (
    <Container>
        <Row>
          {allFoods}
          
        </Row>
    </Container>
  )
}

export default Section_3
