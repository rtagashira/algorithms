// Check if the given string is a correct time representation of the 24-hour clock.

function validTime(time) {
  let arr = time.split(':')
  let hour = Number(arr[0])
  let minute = Number(arr[1])
  if(hour<0 || hour>23){
    return false
  }
  if(minute<0 || minute>59){
    return false
  }
  return true
}
//-------------------------------------------------------------------------
function validTime(t) {
  return t.split(":")[0]<24&&t.split(":")[1]<60}

  
console.log(validTime("13:58"));//true
console.log(validTime("25:51"));//false
console.log(validTime("02:76"));//false