import React, { useEffect, useState } from 'react'

const Day5 = () => {
    let [count ,SetCount]=useState(0);
    let [input ,SetInput]=useState([]);

    useEffect(()=>{
        // console.log("hello");
        fetch('https://jsonplaceholder.typicode.com/todos').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data)
            console.log(input);
            
        })
        
    },[])
    

  return (
    <div>
        <button onClick={()=>SetCount(count+1)}> count {count}
        </button>

        {
            input.map((a)=>{
                return(<>
                <h1>{a.title}</h1>
                </>)
            })
        }
    </div>
  )
}

export default Day5