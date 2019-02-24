// To prepare his students for an upcoming game, the sports coach decides to try some new training drills. 
// To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', 
// he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. 
// Finally, when the coach says 'A', the students should turn around.

// Unfortunately some students (not all of them, but at least one) can't tell left from right, 
// meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many 
// times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

function lineUp(commands) {
  let LR = false
  let count = 0
  for(let i=0;i<commands.length;i++){
    if(commands[i]==='L' || commands[i]==='R'){
      if(LR === true){
        count++
        LR = false
      }else{
        LR = true
      }
    }else if(commands[i]==='A'){
      if(LR === false){
        count++
      }
    }
  }
  return count
}

console.log(lineUp("LLARL"))//3
console.log(lineUp("A"))//1
console.log(lineUp("AAAAAAAAAAAAAAA"))//15
console.log(lineUp("AALAAALARAR"))//5