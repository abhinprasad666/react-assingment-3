import React, { useContext } from 'react'
import './Categories.scss'
import { Col} from 'react-bootstrap'
import { AllDishes } from '../../components/Context/AllDishesContext'



const CardCategories = ({favoriteFood,showOneCategory}) => {


const allDishes=useContext(AllDishes)

// filter favorite dishes
const filterFavDishes=allDishes?.filter((filterDishes)=>{

         return  filterDishes.strCategory===favoriteFood ||  filterDishes.strCategory=== showOneCategory
              
        }).map((dish)=>{

           return <Col  xs={6} sm={6} md={4}  lg={3} xl={3} xxl={3}>  <ul className="special-categories ">
           <img className='w-100' src={dish.strMealThumb} alt="" />
        
          <li>{dish.strMeal}</li>
         </ul>
         </Col>

        })

  return (
        
      
       <>
  
        {filterFavDishes.length !=0? filterFavDishes :<h2>Sorry This iteam is not available!</h2>}
      </>
  

  )
}

export default CardCategories
