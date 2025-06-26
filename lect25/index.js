   let canvas=    document.querySelector('canvas')
  let pen=    canvas.getContext('2d')
let  snakeCells=[ [0,0] ]
let cell=50


   document.addEventListener("keydown",()=>{
    console.log("heheheh");
    
   })

function draw(){
    for(let i of snakeCells){
        pen.fillRect(i[0],i[1],cell,cell)

    }
 
}
function update(){
      let headX=   snakeCells[snakeCells.length-1][0]
         let headY=   snakeCells[snakeCells.length-1][1]
       let newY=     headY+cell;
       let newX=headX
       snakeCells.push([newX,newY])
}

setInterval(()=>{
    draw()
    update()

},200)

