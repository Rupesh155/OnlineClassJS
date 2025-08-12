
import { createContext, useReducer, useEffect } from 'react'
 export const Context= createContext()

 const initialData={
    data:[],
    cartData:[]
 }

 function reduser(state,action){
    if(action.type=="FETCH_DATA"){
        return{
            ...state,data:action.payload
        }
    }
    else if(action.type==="addToCart"){
         
        let existingItem=    state.cartData.find(item=>item.id==action.payload)

        if(existingItem){
            return{
                ...state,
                cartData:state.cartData.map(item=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
            }

        }
        else{
            return{
                ...state,
                cartData:[...state.cartData,{...action.payload,quantity:1}]
            }
        }
        // {
        //     cartData{
        //         id:1,
        //         title:"hehe",
        //         iamge:"hehehe",
        //         quantity:1
        //     }
        // }

        // return{
        //     ...state,
        //     cartData:[...state.cartData,action.payload]

        // }
    }

    else if(action.type==="increment"){
        return{
            ...state,
            cartData:state.cartData.map(item=>item.id===action.payload?{...item,quantity:item.quantity+1}:item)
        }

    }

    else if(action.type==="decrement"){
        return{
            ...state,
            cartData:state.cartData.map(item=>item.id===action.payload?{...item,quantity:item.quantity-1}:item).filter(a=>a.quantity>0)
        }
    }





    else if(action.type=="delet"){
        return{
            ...state,
            cartData:state.cartData.filter((data,key)=>{
                return key!==action.payload

            })
        }
    }
    else{
        return state
    }

 }

 const ContextP=({children})=>{
      const [state,dispatch] =  useReducer(reduser,initialData)

      useEffect(()=>{
        // console.log("hello");
        fetch('https://dummyjson.com/recipes').
        then((res)=>{
            return res.json()

        }).then((data)=>{ 
            dispatch({type:"FETCH_DATA" ,payload:data.recipes})   
        })
        
    },[])

    return(
        <Context.Provider value={{state,dispatch}}>
        {children}
        </Context.Provider>
    )

 }


 export default ContextP