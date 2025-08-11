import React from 'react'
import ApiShowData from './ApiShowData'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route  path='/' element ={<ApiShowData/>}/>
        <Route  path='/cart' element ={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App