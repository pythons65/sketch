var x = 1
function setup(){
  createSketch(450, 400)
}

function mousePressed(){
  console.log(mouseX,mouseY)
}

function keyPressed(){
}
function keyReleased(){
  console.log(this)
}

function draw(){
	background(51)
  rect(mouseX-30,mouseY-30,30,30)
}
