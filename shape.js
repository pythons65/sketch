function rect(x,y,w,h,id){
	let rect = create('div')
  rect.id = id
	setPos(rect,x,y)
  setProps(rect)
	size(rect,w,h)
	shapes.push(rect)
}
function ellipse(x,y,w,h,id){
	let ellipse = create('div')
  ellipse.id = id
	ellipse.style.borderRadius = '100%'
	setPos(ellipse,x,y)
  setProps(ellipse)
	size(ellipse,w,h)
	shapes.push(ellipse)
}

function setProps(elt){
  fillElt(elt, style.fill)
  setStroke(elt)
	rotateElt(elt)
}

function line(x1,y1,x2,y2){
	sketch.innerHTML = ` <svg height="210" width="500">
  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg> `
	shapes.push(line1)
}
