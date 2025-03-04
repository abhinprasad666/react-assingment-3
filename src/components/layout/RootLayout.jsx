import React from 'react'
import { Outlet } from 'react-router'
import './.scss'
import Navigationbar from '../header/navbar/Navigationbar'


const RootLayout = () => {
  return (
    <div>
        <Navigationbar/>
        
        <Outlet/>
        
    </div>
  )
}

export default RootLayout
