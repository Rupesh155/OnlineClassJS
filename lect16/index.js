//call apply ,bind

let obj={
    id:1,
    name:"rahul",
    lastName:"kumar",
    getFullName:function(age,isPass){
        console.log(this.name+ "   "+this.lastName+  " "+age +" "+isPass);
    }
}
let obj1={
    id:2,
    name:"sakshi",
    lastName:"jaiswal",

}
// obj.getFullName.call(obj1,22)
// obj.getFullName.apply(obj1,[22,true])
//  let data=  obj.getFullName.bind(obj1,[])
//  data()


function user(userName,lastName){
    this.userName=userName,
    this.lastName=lastName

} 
let data=     new user("rahul","jain")
let data1=     new user("rohit","jain")

console.log(data);
console.log(data1);

