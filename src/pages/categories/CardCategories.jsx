import React, { useContext, useState } from 'react'
import './Categories.scss'
import { Col} from 'react-bootstrap'
import { AllDishes } from '../../components/Context/AllDishesContext'
import { addToCart,} from '../../redux/slices/cart'
import { useDispatch } from 'react-redux'



const CardCategories = ({favoriteFood,showOneCategory}) => {


const allDishes=useContext(AllDishes)
const dispatch=useDispatch()
const [addToCartBtn,setAddToCartBtn]=useState("Add To Cart")


// add to cart button logic
const CartHandler=(dish)=>{

  dispatch(addToCart(dish))

  setAddToCartBtn((pre)=>{
    
    if(pre=="Add To Cart"){
      return "Adedd To Cart"
    }else{
      return "Add To Cart"
    }
  })
}


// filter favorite dishes
const filterFavDishes=allDishes?.filter((filterDishes)=>{

         return  filterDishes.strCategory===favoriteFood ||  filterDishes.strCategory=== showOneCategory
              
        }).map((dish)=>{

           return <Col  xs={6} sm={6} md={4}  lg={3} xl={3} xxl={3}>  <ul className="special-categories ">
           <img onClick={()=>{s}} className='w-100' src={dish.strMealThumb} alt="" />
        
          <li className='my-2' >{dish.strMeal}</li>
         <button  onClick={()=>CartHandler(dish)}>{addToCartBtn}</button>
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
