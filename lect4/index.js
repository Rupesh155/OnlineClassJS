// console.log("heheh");

// for(let i in arr){
//     console.log(i);
    
// }
// for(let i of arr){
//     console.log(i);
    
// }

//   arr.forEach((c,b,a)=>{
//     console.log(c*2);
//     // return c*2
// } );
// console.log(arr);


//  let data1=  arr.map((a,b,c)=>{ 
//     // console.log(a);
//     return a
    
// })

// console.log(data1==arr);

// let arr=[1,2,3,4,5,6,7,8]

//  let data1= arr.reduce((a,b,c)=>{
//     return a<b?a:b

//  })
//  console.log(data1);

 
let arr=[2,3,2,3,42,4,32,5,2,5,7]

  let data=   arr.filter((a)=>{
    return a>3

   }).filter((b)=>{
    return  b%2==0
   }).reduce((a,b)=>{
    return a+b

   })

   console.log(data);
   
//    let data1=   data.filter((a)=>{
//     return a%2==0

//    })
//   let sum=  data1.reduce((a,b)=>{
//     return a+b

//    })
//    console.log(data);
//    console.log(data1);
//    console.log(sum);
   
   
   
// [3,3,4,5,7,32,42]
// [4,32,42] 

    
    //  let sum=   arr.reduce((a,b,c,d)=>{
    //     return a+b   
    //  },10)
    //  console.log(sum);


     


//  let ridhhimaaaaData=  arr.map((a,b,c)=>{
//     return a>3

// })
// console.log(ridhhimaaaaData);


//  let data=  arr.filter((a,b,c)=>{
//     return a>3
// })
// console.log(data);









