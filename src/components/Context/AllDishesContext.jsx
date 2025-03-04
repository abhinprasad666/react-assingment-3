import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import LodingPage from '../Loding/LodingPage'




//allDishes context
export const AllDishes=createContext()
export const Loding=createContext()
      

const AllDishesContext = ({children}) => {


const [allDishes,SetAlllDishes]=useState()

const [loding,setLoding]=useState(true)

//get allProduct api

const getAllProduct=()=>{
    axios("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
    .then((res)=>{
        SetAlllDishes(res.data.meals)
        setLoding(false)

      
    })
}

  useEffect(()=>{
    getAllProduct()
  },[])

  console.log("all dishes are:",allDishes)

  return (
    <div>
      <AllDishes.Provider value={allDishes}>
        <Loding.Provider value={loding}>
            {loding==false ?children :<LodingPage/>}
         </Loding.Provider>
      </AllDishes.Provider>
    </div>
  )
}

export default AllDishesContext
