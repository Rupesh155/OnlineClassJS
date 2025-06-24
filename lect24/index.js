  let button=   document.querySelectorAll("button")
  let inp=   document.querySelector("input")

  console.log(button ,'hehehe');
  for(let btn of  button){
    // console.log(btn);
    btn.addEventListener('click',()=>{
        // console.log("hello");
        let text =btn.innerText
        // console.log(text);
        if(text==="C"){
            inp.value=""
            
        }
        else if(text=="="){
            inp.value= eval(inp.value)

        }
        else{
            inp.value=inp.value+text
        }    
    })
  }






// eval(5+5) //10
//  //
// console.log(eval(6-4+5*4));

  


