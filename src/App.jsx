import React, { useContext } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import AllDishesContext from './components/Context/AllDishesContext'






const App = () => {

  return (

   <AllDishesContext>
      <Header />
       <Main/>
      <Footer/>
      </AllDishesContext>
  ) 
}

export default App
