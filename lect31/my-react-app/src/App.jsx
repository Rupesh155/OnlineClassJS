// import React from 'react'
// import './App.css'


// const App = () => {
//   let arr=[1,2,3,4,5] 
//   function fun1(){
//     console.log("hehehehe");
    
//   }
//   return (
//     // <div>
//     // <button  onClick={fun1}>click</button>
//     // </div>
//     <div>App 
//       {
//         arr.map((a)=>{
//           return(<>
//           <h1> {a}</h1>
//           </>)
//         })
//       }
//     </div>
//   )
// }


// // const Home=()=>{
// //   return(
// //     <div>
// //       <h2> Home Compoo</h2>
// //     </div>
// //   )

// // }
// // export {Home}


// export default App


  // props

// import React from 'react'
// import Day4 from './Day4'
// import Day5 from './Day5'
// // import Day2 from './Day2'
// // import Day3 from './Day3'

// const App = () => {
//   let user="hello"
//   return (
//     <div>
//       {/* <Day2/> */}
//       {/* <Day3/> */}
//       {/* <Day4    data={user} /> */}
//       <Day5/>


//     </div>
//   )
// }

// export default App





import React from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
// import Home from './Home'
// import Day7 from './Day7'
import Day8 from './Day8'

const App = () => {
  return (
    <div>
      {/* <Day7/> */}
      <Day8/>
      {/* <NavBar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path='/contact'  element={<Contact/>}/>
      </Routes> */}
    </div>
  )
}

export default App



//npm i react-router-dom