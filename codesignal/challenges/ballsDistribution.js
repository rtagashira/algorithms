// You have a set of balls that are colored in such a way that there is ballsPerColor balls of each of the given number of colors. You also have an infinite number of boxes of the same max capacity boxSize.

// You distribute the balls among the boxes as follows:

// first you fill up the first box, then the second, etc.
// first you use all of the balls of the first color, then all of the balls of the second color, etc.
// Find the number of colors for which there is more than one box that contains a ball of that color.

// Example

// For colors = 3, ballsPerColor = 5, and boxSize = 6, the output should be
// ballsDistribution(colors, ballsPerColor, boxSize) = 2.

// Here's how balls are distributed between the boxes:

// the first box contains 5 balls of the first color and 1 ball of the second color;
// the second box contains 4 balls of the second color and 2 balls of the third color;
// the third box contains the remaining 3 balls of the third color.
// All balls of the first color end up in one box, and balls of the second and the third colors are split between two boxes each. Thus, the answer is 2.

function ballsDistribution(colors, ballsPerColor, boxSize) {
  let count = 0
  let r = false 
  //r determines whether an overflow is found by comparing ballsPerColor with remainder of balls from last round or an empty box
  //r = remainder from previous box
  let prevBoxState = 0
  for(let i=0;i<colors;i++){
    if(r){
      if(ballsPerColor > prevBoxState){
        count++
        prevBoxState = ballsPerColor - prevBoxState
      }else if(ballsPerColor < prevBoxState){
        prevBoxState = prevBoxState - ballsPerColor
      }else{
        r = false
      }
    }else if(ballsPerColor> boxSize){
      count++
      prevBoxState = ballsPerColor - boxSize
      r = true
    }else if(ballsPerColor === boxSize){

    }else{

      prevBoxState = boxSize - ballsPerColor
      r = true
    }
  }
  return count
}

console.log(ballsDistribution(3,5,6))//2
console.log(ballsDistribution(10,10,9))//10
console.log(ballsDistribution(10,10,30))//0
console.log(ballsDistribution(3,3,3))//0