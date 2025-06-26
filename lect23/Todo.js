let inp=   document.querySelector('input')

 let btn=     document.querySelector('button')
  let ul=    document.querySelector('ul')

 btn.addEventListener('click',()=>{
       
 let li=   document.createElement('li')
 li.innerText=inp.value
 ul.append(li)
 inp.value=""

li.addEventListener('click',()=>{
    li.remove()
})
 

 })