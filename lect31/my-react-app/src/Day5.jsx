import React, { useEffect, useState } from 'react'
import './Day5.css'
import ApiDataShow from './ApiDataShow';
const Day5 = ({input,SetInput}) => {


    useEffect(()=>{
        // console.log("hello");
        fetch('https://dummyjson.com/recipes').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data.recipes)
            console.log(data.recipes,"mai hu kaun");
            
      
            
        })
        
    },[])



    


    
  return (
    <div>
     <ApiDataShow  data={input} />
      
    </div>
  )
}

export default Day5   
