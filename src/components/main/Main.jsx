import React,{useContext} from 'react'
import Sectiion_1 from './section-1/Sectiion_'
import Section_2 from './section-2/Section_2'
import Section_3 from './section-3/Section_3'
import Section_4 from './section-4/Section_4'
import Section_5 from './section-5/Section_5'
import Section_6 from './section-6/Section_6'
import Banner from './banner/Banner'
import { AllDishes } from '../Context/AllDishesContext'



const Main = () => {

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
    <div >
      {allFoods}
      <Sectiion_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
    </div>
  )
}

export default Main
