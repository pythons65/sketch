var x = 1
function setup(){
  createSketch(450, 400)
}

/*
update in this version
rotateOrigin() args -> (top | left | right | bottom) || px value
stroke() args (grayscale value | rbg value | rgba value)
strokeWeight() args (width)
control over the object by id eg.rect(x,y,w,h,id)

in another version line() will be updated
 */

function draw(){
	background(51)
  stroke(10,100,10)
  fill(200,200,100,0)
  rotate(x)
  push()
  strokeWeight(3)
  fill(0)
  rotateOrigin(60,60)
  rect(120,200,50,30)
  pop()
  rotate(x)
  rotateOrigin('top',' left')
  rect(300,300,50,50,'rect')
  x++;
}
