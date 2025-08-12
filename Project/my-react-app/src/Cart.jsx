import React, { useContext } from 'react'
import { Context } from './Context'

const Cart = () => {
    let {state,dispatch}=    useContext(Context)
    console.log(state,"kya mil rha haiii");
    
  return (
    <div>
    {
        state.cartData.map((a,index)=>{
            return(<div id='card'  >
                <img  src={a.image}/>
                <p>{a.name}</p>
                <h2>{a.quantity}</h2>
                <button  onClick={()=>dispatch({type:"delet",payload:index})}>delet</button> 
            </div>)
        })
    }
    </div>
  )
}

export default Cart