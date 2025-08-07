import React, { useContext } from 'react'
import { Context } from './Context'
const ApiShowData = () => {
     let  {state,dispatch}=     useContext(Context)
    //  console.log(data,"isko dekhoo");
  return (
    <div>
      { state.data.map((a)=>{
        return(<>
        <h2>{a.name}</h2>
        </>)
       })}
    </div>
  )
}

export default ApiShowData