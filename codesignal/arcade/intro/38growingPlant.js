// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by 
// downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the 
// seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if(upSpeed>desiredHeight) return 1
  let day = 0
  let height = 0
  while(height<desiredHeight){
    day++
    if(height + upSpeed >= desiredHeight){
      break
    }
    height += upSpeed - downSpeed

  }
  return day
}

//----------------------------------------------------------------------
function growingPlant2(upSpeed, downSpeed, desiredHeight) {
  return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

console.log(growingPlant(100,10,910))//10
console.log(growingPlant(10,9,4))//1
console.log(growingPlant(6,5,10))//5
console.log(growingPlant(5,2,7))//2