
var x = 10
var y = 0
var yvelocity = 0.1
function setup(){
  createSketch(450, 400)
}
function draw(){
  background(100,200,255)
  ellipse(x,y,50,50)
  y += yvelocity
  yvelocity++
  if (y + 50 >= height){
    yvelocity /= 1.12
    yvelocity = yvelocity * -1
  }
}
