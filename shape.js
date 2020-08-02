function rect(x,y,w,h){
	let rect = create('div')
	setPos(rect,x,y)
	fillElt(rect, style.fill)
	rotateElt(rect)
	size(rect,w,h)
	shapes.push(rect)
}
function ellipse(x,y,w,h){
	let ellipse = create('div')
	ellipse.style.borderRadius = '100%'
	setPos(ellipse,x,y)
	fillElt(ellipse, style.fill)
	rotateElt(ellipse)
	size(ellipse,w,h)
	shapes.push(ellipse)
}

function line(x1,y1,x2,y2){
	sketch.innerHTML = ` <svg height="210" width="500">
  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg> `
	shapes.push(line1)
}
