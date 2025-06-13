let arr=[1,2,3,4,5,5]

// Array.prototype.myFilter=function(cb){
//     console.log(cb,"kyaa aayega");
    
//     // let res=[];
//     for(let i =0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             // res.push(this[i])
//             return this[i]
//         }
//     }
//     return undefined
// }
// let data=  arr.myFilter(  (a,b,c)=>{
//     return a==5

// }   )
// console.log(data);


// let data=  arr.filter((a,b,c)=>{
//     return a%2==0

// })
// console.log(data);


// let myFilter=function(cb){
//     // console.log(cb);
   
//     // console.log( cb(5));
//     if(cb(5)){
//         console.log("byee");
        
//     }
//     console.log("hii");
    
    
    
   
    
// }
// myFilter( (a)=>{ 
//     return a==6

// } )


//find


  // some ,every forEach

// let arr1=[1,2,3,4,5,6]
// Array.prototype.myReduce=function(cb,initailValue){
//     let acc=initailValue//0
//     for(let i=0;i<this.length;i++){
//         acc=cb(acc,this[i])

//     }
//     return acc

// }


// let sum= arr1.myReduce(   (a,b)=>{
//     return a+b    //a=a+B

// },0)
// console.log(sum);

let obj={
    id:1,
    name:"rahul",
    lastName:"kumar",
    getFullName:function(age){
        console.log(this.name+this.lastName+age);
        
        
    }
}
let obj1={
    id:2,
    name:"rohit",
    lastName:"kumar"
}
obj.getFullName.call(obj1,15)