// callBack function 

// function check(num,fn){
//     return fn(num)

// }
// function checkNum(){
//     return typeof num =="number"

// }
// check( 10,checkNum)

// Map(()=>{

// })


// function outer(){
//     let userName="Lionel";
//     function printName(){
//         console.log(userName);
        
//     }
//     printName()
// }
// outer()

//closures

// function outer(){
//     let userName="hello";
//     function printName(){
//         console.log(userName);    
//     }
//     // printName()
//     return printName
// }
// let fn=  outer()
// fn()


// function couter(){
//     let count=0
//     return{
//         getCount:function(){
//             return count;
//         }
//     }
// }
//   let fn=   couter()
//   console.log(fn.getCount());

function outer(){
    let count=0
    return{
        getCall:function(){
            return count++
        }
    }

}
let counter =outer()
let counter1 =outer()
counter1={
    getCall:function(){
    console.log("hehehehe");
    
    }
}

// console.log(counter.getCall());
// console.log(counter1.getCall());
// console.log(counter1);




  







