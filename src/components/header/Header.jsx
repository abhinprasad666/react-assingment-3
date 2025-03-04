import React, { useContext } from 'react'
import Navigationbar from './navbar/Navigationbar'
import Banner from '../main/banner/Banner'
import { AllDishes, Loding } from '../Context/AllDishesContext'





const Header = () => {

const allDishes=useContext(AllDishes)

const maxDish=1
   
          const allFoods= allDishes ?.map((res,length)=>{
                 
            if(length<maxDish){

              return(
                <Banner key={res.idMeal} image={res.strMealThumb}/>
              )
            }

          })



  return (
    <div>
      <Navigationbar/>
     {allFoods}
    </div>
  )
}

export default Header
