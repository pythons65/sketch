function constrains(value,lower,upper){
  if (value > upper ){
    value = upper
  }else if(value < lower){
    value = lower
  }
  return value
}

function outsideX(value){
  return constrains(value,0,width)
}
function outsideY(value){
  return constrains(value,0,height)
}

function mapper(value,l,h,l1,h1){
  return value * ((h1 -l1) / (h - l))
}