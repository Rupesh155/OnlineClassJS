// setTimeout(()=>{
//     console.log("A");
// },0)
// setTimeout(()=>{
//     console.log("B");
  
// },1000)
// for(let i=0;i<10000;i++){
//     console.log(i);
    
// }
// console.log("C");

//CallBack hell


// step1=> 5s  //select a photo
// step2=>4//  filter
// step3=> 3 //captions
// step4=> 2// post


// function step1(fn){
//     console.log(fn);
    
//     setTimeout(()=>{
//         console.log("select a photo");
//         fn()
        
//     },5000)

// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log("filterrrrrrr");
//         fn()
        
//     },4000)

// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log("captionssss");
//         fn()
        
//     },3000)

// }
// function step4(){
//     setTimeout(()=>{
//         console.log("posttt");
        
//     },2000)

// }


//   step1(  ()=>{
//     step2( ()=>{
//         step3(()=>{
//             step4()
//         })
//     })
//   } )

//A =>  b  10am    
  
  
 
//   let promise=  new Promise((res,rej)=>{
//     // res("heelooo")
//     // rej("errr")
//     let isBool=true
//     if(isBool){
//         res("hehehe")
//     }else{
//         rej()
//     }

//   })
// promise.then((r)=>{
//     console.log(r);
    
// }).catch((err)=>{
//     console.log(err);
    

// })
  