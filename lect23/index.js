   
   let formSignUp=    document.querySelector("#SignUp")
   formSignUp.addEventListener('submit',(e)=>{
    e.preventDefault()
    let userData={
        name:formSignUp[0].value,
        number:formSignUp[1].value,
        password:formSignUp[2].value
    }
    localStorage.setItem('userData',JSON.stringify(userData))


   })
 let formLogin=   document.querySelector("#login")
 formLogin.addEventListener('submit',()=>{
    let number=formLogin[0].value
    let passWord=formLogin[1].value

       let data=     JSON.parse(localStorage.getItem("userData")) 
       if(number==data.number && passWord===data.password){
        prompt('login successssss')
       }
       prompt("Invalidd")


 })