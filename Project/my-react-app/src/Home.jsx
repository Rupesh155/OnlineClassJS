// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Home = () => {
//       let navigate=  useNavigate()
//     let users=[{id:1,name:"rimi"},{id:2,name:"ritik"},{id:3,name:"priyal"}]

//     function donee(id){
//         // console.log(id);
//         navigate(`/user/${id}`)
      
        

//     }
//   return (
//     <div>
//         <h2> Users list</h2>
//         {
//             users.map((a)=>{
//                 return(<>
               
//                 <li  onClick={()=>donee(a.id)}>{a.name}</li>
             
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Home



import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {

  let [showData,SetShowData]=   useState("")



  useEffect(()=>{
    async  function HomeCall(){

      let Token=  localStorage.getItem("token")
    
      let dataToken=JSON.parse(Token)
    
      
        // let res=   await axios.get("http://localhost:4000/home")
        // console.log(res,"heheheh");
           
        fetch("http://localhost:4000/home"    ,{
          method:'GET',
          headers:{
            "Content-Type":"application/json",
            "Authorization":dataToken
          }
    
        }).then((res)=>{
          return res.json()
    
        }).then((data)=>{
          console.log(data);
          SetShowData(data.msg)
          
    
        })
        
    
      }
      HomeCall()

  },[])


  return (
    <div>{showData}</div>
  )
}

export default Home