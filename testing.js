var x = 1
function setup(){
  createSketch(450, 400)
}

function mousePressed(){
  console.log(mouseX,mouseY)
}
function draw(){
  //background  
	background(51)
  rect(mouseX,mouseY,30,30)
}
