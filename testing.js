var x = 1
function setup(){
  createSketch(450, 400)
}

function draw(){
	background(51)
	rotate(x)
	// style inside push and pop doesnot effect outside style
	push()
	fill(0)
	rect(100,100,50,50)
	ellipse(110,10,50,50)
	pop()
	fill(150)
	rect(100,100,50,50)
	ellipse(110,10,50,50)
	x++;
	if (x > 100){
	  noLoop()
	}
}
