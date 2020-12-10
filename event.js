

document.onmousemove = function(e){
      mouseX  = outsideX(e.clientX - sketch.offsetLeft)
      mouseY = outsideY(e.clientY - sketch.offsetTop)
}
document.onmousedown = function(e){
  if(typeof(mousePressed) == 'function'){
    mousePressed.call(e)
  }
}

document.onmouseup = function(e){
    if(typeof(mouseRelease) == 'function'){
    mouseRelease.call(e)
  }
}

document.onkeydown = function(e){
  if(typeof(keyPressed) == 'function'){
    keyPressed.call(e)
  }
}

document.onkeyup = function(e){
  if(typeof(keyReleased) == 'function'){
    keyReleased.call(e)
  }
}
