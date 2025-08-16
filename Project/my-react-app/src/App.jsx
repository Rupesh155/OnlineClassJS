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


// import React from 'react'
// import Home from './Home'
// import { Route, Routes } from 'react-router-dom'
// import UserDetails from './UserDetails'
// const App = () => {
//   return (
//     <div>
//       <Routes >  

//       <Route  path='/'   element={ <Home/>}/>
//       <Route  path='/user/:id'   element={ <UserDetails/>}/>

//       </Routes>

//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     let total = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       total += i;
//     }
//     return total + num;
//   };

//   // ❌ Every render runs expensiveCalculation
//   const result = expensiveCalculation(count);

//   return (
//     <div>
//       <h2>Expensive Result: {result}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }


// useMemo or useCallback

import React, { memo, useCallback, useMemo, useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0)
  console.log("apppp wali fileeeee");


  //  let val=   useMemo(()=>{
  //     let data=0
  //       for(let i =0;i<1000000000;i++){
  //         data+=i

  //       }
  //       return data
  //   },[])


  // let random=Math.random()
  //   let data=0
  // function sum(){
  //   for(let i =0;i<1000000000;i++){
  //     data+=i
  //   }
  //   // return data
  //   // console.log(data);
  // }
  // sum()
  return (
    <div>
      {/* <h1>{val}</h1> */}
      <h1>appp</h1>
      <h2 >{count}</h2>
      <button onClick={() => setCount(count + 1)}>click</button>
      {/* <ChildApp /> */}
      <MemoizedChild   count={count} />
    </div>
  )
}

export default App


  let MemoizedChild=   memo(function ChildApp() {
    console.log("childdddddd wali fileeeee");
  return (
    <div>Childddddd
      <h2></h2>
    </div>
  )

})  

// const ChildApp = () => {
//   console.log("childdddddd wali fileeeee");

//   return (
//     <div>Childddddd
//       <h2></h2>
//     </div>
//   )
// }









