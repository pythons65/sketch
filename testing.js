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
  noStroke()
  strokeWeight(10)
	background(51)
  rect(mouseX-30,mouseY-30,30,30)
  stroke(255)
  //strokeWeight is font-weight also
  textSize(40)
  text('hello',20,20)
}
