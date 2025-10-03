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



import React from 'react'
import axios from 'axios'
const Home = () => {
  async  function HomeCall(){
  let Token=  localStorage.getItem("token")

  let data=JSON.parse(Token)
  console.log(data, 'toekn');
  
    let res=   await axios.get("http://localhost:4000/home")
    console.log(res,"heheheh");
    

  }
  HomeCall()

  return (
    <div>Home   fileeeeeee</div>
  )
}

export default Home