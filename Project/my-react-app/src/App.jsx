// import React from 'react'
// import ApiShowData from './ApiShowData'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './Cart'

// const App = () => {
//   return (
//     <div>
     
//       <Routes>
//         <Route  path='/' element ={<ApiShowData/>}/>
//         <Route  path='/cart' element ={<Cart/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './UserDetails'
const App = () => {
  return (
    <div>
      <Routes >  
     
      <Route  path='/'   element={ <Home/>}/>
      <Route  path='/user/:id'   element={ <UserDetails/>}/>

      </Routes>
      
    </div>
  )
}

export default App