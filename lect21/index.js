// const arr = [
//     'https://images.unsplash.com/photo-1662330287683-6032da28889c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
//     'https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
//     'https://images.unsplash.com/photo-1660899599007-771f97039eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
//     'https://images.unsplash.com/photo-1662324580989-591a589c5e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
//   ]
  
//   const imageEl = document.querySelector('img');
  
//   let num = 0;
  
//   setInterval(function() {
//     imageEl.setAttribute('src', arr[num]);
//     num = (num + 1) % arr.length;
//     // num++;
//   }, 2000);



// function fun1(){
//     console.log("hello");
    
// }

//   let btn=   document.querySelector("#one")
//   btn.onclick=function(){
//     console.log("byeee");
    
//   }


 let btn=   document.querySelector('#one')
  let body=    document.querySelector("body")
  let isboll=true
 btn.addEventListener("click", function(){
    if(isboll){
        body.style.backgroundColor="red"
    }
    else{
         body.style.backgroundColor="green"

    }
    isboll=!isboll  
 })