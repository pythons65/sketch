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
function setPropsText(elt){
  // fillElt(elt, style.fill)
  // setStroke(elt)
  elt.style.color = arrayToColor(style.stroke)
  elt.style.fontSize = style.fontSize + 'px'
  elt.style.fontWeight = mapper(style.strokeWeight,0,10,100,900)
	rotateElt(elt)
}

function text(value,x,y,id){
  let txt = create('p')
  txt.innerHTML = value
  txt.id = id
  setPos(txt,x,y)
  setPropsText(txt)
  shapes.push(txt)

}

function line(x1,y1,x2,y2){
	sketch.innerHTML = ` <svg height="${height}" width="${width}">
  <line id="line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${arrayToColor(style.stroke)};stroke-width:${style.strokeWeight}" />
</svg> `
	shapes.push(document.querySelector('#line'))
}
