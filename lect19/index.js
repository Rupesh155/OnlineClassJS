//    let promise=  new Promise((res,rej)=>{
//     // res()
//     // rej("errr")
//     res("hello")
//    })
//    promise.then((data)=>{
//     console.log(data);
//    }).catch((err)=>{
//     console.log(err);
//    })

 let step1=   function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("select a photo")
        },5000)
    })
   }

    
   let step2=   function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("filterrrrr")

        },4000)
    })
   }
 //callback hell => promise=> async await

//    step1().then((data)=>{
//     console.log(data);
//        return step2()
//    }).then((filterr)=>{
//     console.log(filterr);
//    })



//  async  function  call(){
//   let data=   await   step1()
//   console.log(data);

//     let data1=   await  step2()
//     console.log(data1);   
// }
// call()



   
