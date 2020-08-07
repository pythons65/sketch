var x = 1
function setup(){
  createSketch(450, 400)
}

/*
update in this version
rotateOrigin() args -> (top | left | right | bottom) || px value
stroke() args (grayscale value | rbg value | rgba value)
strokeWeight() args (width)
 */

function draw(){
	background(51)
  rotate(x)
  rotateOrigin('top left')
  stroke(10,100,10)
  strokeWeight(3)
  fill(200,200,100,0)
  ellipse(120,200,50,30)
  rect(300,300,50,50,'rect')
  x++;
}
