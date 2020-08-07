var  evod = evod || {}
var width = undefined
var height = undefined
var sketch = document.querySelector('#sketch')
var setId;

var shapes = []

var style = {
  fill: [100,100,100],
  origin:[0,0],
  strokeWeight:1,
  stroke:[100,100,100],
  rotateAngle:0
}

function strokeWeight(n){
  style.strokeWeight = n
}

function stroke(r,g,b,a){
  style.stroke = [r,g,b,a]
}

window.onload = (event) =>{
  evod._setup = function(){
    createSketch(400, 400)
    setup()
  }
  evod._draw = function(){
    setId = setInterval(()=>{
      draw()
    }, 50);
  }
  evod._setup()
  evod._draw()
}

function fill(r,g,b,a){
  style.fill = [r,g,b,a]
}

function returner(args){
  var good = []
  args.forEach((f)=>{
    if (f){
      good.push(f)
    }
  })
  return good
}

function fillElt(elt,color){
  elt.style.background = arrayToColor(color)
}

function arrayToColor(color){
  [r,g,b,a] = color
  if (!g && !b && !a){
    return`rgba(${r},${r},${r},1)`
  }else if(!a){
    return`rgba(${r},${g},${b},1)`
  }else{
    return`rgba(${r},${b},${g},${a})`
  }
}

function setStroke(elt){
  setStyles(elt,{
    'border':`${style.strokeWeight}px solid ${arrayToColor(style.stroke)}`
  })
}


function noLoop(){
  clearInterval(setId);
}

function createSketch(w,h){
  width = w;
  height = h;
  size(sketch,w,h)

}

function background(r,g,b,a){
  if (!g && !b && !a){
    sketch.style.background = `rgb(${r},${r},${r})`
  }
  else if (!a){
    alpha = 1
  sketch.style.background = `rgba(${r},${g},${b},${alpha})`
  }else{
    alpha = a
  sketch.style.background = `rgba(${r},${g},${b},${alpha})`

  }
  shapes.forEach(p=>{
    removeElt(p)
  })

}

function removeElt(elt){
  elt.remove()
}


function size(elt,w,h){
  elt.style.width = w + 'px';
  elt.style.height = h + 'px'
}

function setPos(elt,x,y){
  elt.style.left = x + 'px';
  elt.style.top = y + 'px';
}

function create(elt){
  var el = document.createElement(elt)
  sketch.appendChild(el)
  el.style.position = 'absolute'
  return el
}
var tempStyle;
function push(){
  tempStyle = {...style}
}

function pop(){
  style = {...tempStyle}
}
const setStyles = function(element,styles){
    Object.assign(element.style, styles);
}

const dist = function(x1,y1,x2,y2){
  return Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))
}
function getAngleDeg(ax,ay,bx,by) {
  var angleRad = Math.atan((ay-by)/(ax-bx));
  var angleDeg = angleRad * 180 / Math.PI;
  
  return(angleDeg);
}


function rotate(angle){
  style.rotateAngle = angle
}

function rotateOrigin(x,y){

  style.origin[0] = x
  style.origin[1] = y
}

function rotateElt(elt){
  setStyles(elt, {
    'transform-origin' : style.origin[0] + 'px ' + style.origin[1] + 'px' ,
    'transform' : `rotate(${style.rotateAngle}deg)`
  })
}