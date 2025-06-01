//Higher Order function
// function sum(fn){
//     fn()
//     // console.log(fn);
    
// }


// sum( function inner(){
//     console.log("inner");
    

// }  )

let arr=   [4,'hello',"hiii","byyee",true,false]
   function getString(i){
    return typeof i==="string"
   }
   function getNumber(i){
    return typeof i==="number"
   }
   function getBool(i){
    return typeof i==="boolean"
   }
function get(arr,fn){
    let res=[]
    for(let i of arr){
        if(   fn(i)   ){
            res.push(i)

        }

    }
    console.log(res);
    
}
get( arr,getString)
get( arr,getNumber)
get( arr,getBool)




// function number(arr){
//     let res=[]
//     for(let i of arr){
//         if(typeof i =="number"){
//             res.push(i)
//         }
//     }
//     console.log(res);
    

// }
// function getString(arr){
//     let res=[]
//     for(let i of arr){
//         if(typeof i =="string"){
//             res.push(i)
//         }
//     }
//     console.log(res);
    

// }
// getString(arr)
// [4,5,3]

// function outer(){
//     function fn(){

//     }
//     return fn
// }
// outer()
