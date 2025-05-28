// Execution Context

// var a=5
// function sum(){
//     let b=10
//     let c=20
//     console.log(a+b+c);
    

// }
// sum()
// console.log(a);

// let arr=[
//     [1,2,3],       
//     [4,5,6],  
//     [7,8,9]     
// ]

//  let data=   arr[0].map((value,index)=>{
//     return arr.reduce((sum,row)=>{
//         return sum+ row[index]

//     },0)

//    })
//    console.log(data);


// Hoisting 
// let arr=[1,2,2,3,4,4,5,6]
// let res=[]
// for(let i of arr){
//     if(res.includes(i)){
//         console.log(i);
//         break;
        
//     }
//     res.push(i)
// }
let a=5
function sum(){
    let data=a
    function inner(){
        console.log(data);
    }
    // inner()
    return inner
}
 sum()



