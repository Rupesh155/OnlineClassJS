//this
// console.log(window);

// console.log("mai alg hu ");

// console.log(this==window);
// let a=5;
// let obj={
//     name:"palak",
//     amount:13000,
//     getBalance:()=>{
//         console.log(this.a);
//         // // console.log("bounceeeeee");
//         // console.log(this);        
//     }
// }
// obj.getBalance()

// prototype
// let obj={
//     id:1,
//     name:"ritik"
// }
// // console.log(obj.toString());
// console.log(obj.__proto__);


Array.prototype.aanya=function(cb){
    console.log(cb);
    
    let res=[]
    for(var i=0;i<this.length;i++){
      var data=  cb(this[i],i,this)
       res.push(data)
        
    }
    return res

}

let arr=[1,2,3]
 let val=  arr.aanya(   (a,b,c)=>{ 
    return a*2      

}   )
console.log(val);




// console.log(arr);


//arr=> Array.prototype=> Object.prototype=>null
// console.log(arr.name);
// let obj={
//     id:1
// }
// obj=> Object.prototype=> null
// console.log(obj.name);
// let str="Hello"
// str=> String.prototype=> Object.prototype=> null
// console.log(str.toLowerCase());

// arr.map(()=>{

// })















