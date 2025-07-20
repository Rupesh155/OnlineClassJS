// import React from 'react'
// import Dummy from './Dummy'



// const Day4 = ({data}) => {
//     // console.log(a );
//   return (
//     <div>{data}
//     {/* <Dummy/> */}
//     </div>
//   )
// }

// export default Day4



import React, { useState } from 'react'
const Day4 = () => {
   let [input,SetInput]=      useState("")
   let [data,SetData]=      useState([])
   function fun1(){
    SetData([...data,input])
    console.log(data);
    SetInput("")
    
   }
  return (
    <div>
        <input    name='input' value={input}    onChange={(e)=>SetInput(e.target.value)}/>
        <button onClick={fun1}>click</button>
        {
            data.map((a)=>{
                return(<>
                <li>{a}</li>
                <button >x</button>
                </>)
            })
        }
    </div>
  )
}

export default Day4