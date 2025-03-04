import Card_Section_1 from './Card_Section_1'
import { Container, Row } from 'react-bootstrap'
import { AllDishes } from '../../Context/AllDishesContext'
import { useContext } from 'react'


const Sectiion_1 = () => {

  const allDishes=useContext(AllDishes)

  const maxDish=8

  const allFooos=allDishes?.map((res,length)=>{

    if(length<maxDish){
          //create randum number
let randomNumber = Math.floor((Math.random() * 10) + 1);
    if(randomNumber===10){
      randomNumber=5
    }
      return(
        <Card_Section_1 key={res.idMeal} image={res.strMealThumb} name={res.strMeal} randomNumber={randomNumber}/>
      )
    }

  })

  return (
    <Container className='my-5'>
      <Row>
     {allFooos}
      </Row>
    </Container>
  )
}

export default Sectiion_1
