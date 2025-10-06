
let express=  require('express')
const { model } = require('mongoose')
   let router=    express.Router()
router.post("/signUp",  async(req,res)=>{
        
    let {name,email,passWord,role}=      req.body
          
        const existingUser=      await  User.findOne({email})
        if(existingUser){
          return res.send({msg:"User already exists"})
        }
        else{
                let hashedP=     await bcrypt.hash(passWord,10)
                console.log(hashedP);
              let newUser=     new User({
                  name:name,
                  email:email,
                  passWord:hashedP,
                  role:role || 'user'
                })
                await   newUser.save()
                res.send({msg:"user registered"} )
                
        }

})

module.exports=router