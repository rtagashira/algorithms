// Consider a robot standing on a 2-dimensional grid at point (0, 0). It follows a sequence of instructions.

// Each instruction is processed as follows:

//     'L' decreases the first coordinate by one,
//     'R' increases the first coordinate by one,
//     'U' increases the second coordinate by one,
//     'D' decreases the second coordinate by one.

// But the robot isn't allowed to leave a pre-defined square (with sides parallel to the axes) centered at (0,0). If the execution of the current instruction would lead to the robot leaving the square, that instruction is just ignored.

// Given a sequence of instructions and a restricting square, output an array of two integers representing the final position of the robot after executing all the instructions.

let robotPath = (str, num) => {
  let arr = [0,0],
      obj = {
              L:[-1,0],
              R:[1,0],
              U:[0,1],
              D:[0,-1]
            }
  for(let char of str){
    arr = arr.map((x,i)=>Math.abs(x+obj[char][i])<=num? x+obj[char][i]: x)
  }
  return arr
}

let robotPath = (str, num) => {
  let arr = [0,0]
  for(let char of str){
    if(char === 'L' && Math.abs(arr[0] - 1) <= num) arr[0]--
    if(char === 'R' && Math.abs(arr[0] + 1) <= num) arr[0]++
    if(char === 'U' && Math.abs(arr[1] + 1) <= num) arr[1]++
    if(char === 'D' && Math.abs(arr[1] - 1) <= num) arr[1]--
  }
  return arr
}

console.log(robotPath("LLLLUUUUDR",2))//[-1, 1]
console.log(robotPath("LLLLDDDDUR",2))//[-1, -1]
console.log(robotPath("LRUDLURDLDUR",1))//[0, 0]