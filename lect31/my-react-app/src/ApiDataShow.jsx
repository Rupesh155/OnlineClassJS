import React from 'react'
import './Day5.css'
import Day5 from './Day5';
const ApiDataShow = ({data}) => {
    console.log(data,"hehe");
 
  return (
    <div>

        <div id='parent_Card'>  
        {
            data.map((a,index)=>{
                return(<div id='card'  >
                    <img  src={a.image}/>
                    <p>{a.name}</p>
                    <button>addTOcart</button>
                </div>)
            })
        }
    </div>
    </div>

  )
}

export default ApiDataShow



// main=> app => Day5=>ApiDataShow
//         |
//         cart