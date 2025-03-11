import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import AllDishesContext from './components/Context/AllDishesContext'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import RootLayout from './components/layout/RootLayout'
import Categories from './pages/categories/Categories'
import CartPage from './pages/cart/CartPage'
import { useState } from 'react'






const App = () => {


  //routes
  const router=createBrowserRouter(createRoutesFromElements(
               
             <Route>
              <Route path='/' element={<RootLayout/>}>
              <Route index element={<Main/>} ></Route>
              <Route path={"categories"} element={<Categories/>}/>
              <Route path={"cart"} element={<CartPage/>}/>
              </Route>
             </Route>
  ))

  return (

   <AllDishesContext>
  
       <RouterProvider router={router}/>
      {/* <Footer/> */}
      // </AllDishesContext>
     
  ) 
}

export default App
