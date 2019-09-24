// You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

// The team you favor plays in the following formation:

// 0 3 0
// 4 0 2
// 0 6 0
// 5 0 1

// where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

// Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.

let volleyballPositions = (arr, k)=> {
  while(k>6){
    k -= 6
  }
  let obj = {}
  let start = [
              [0,3,0],
              [4,0,2],
              [0,6,0],
              [5,0,1]
              ]
  let pass = 1
  // first pass puts the player names in the object; second pass fills in the correct player name using the object
  while(pass <= 2){
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr[0].length;j++){
        if(pass === 1){
          if(start[i][j] === 0){
            start[i][j] = arr[i][j]
          }else{
            let n = start[i][j] + k
            while(n>6){
              n -= 6  
            }
            obj[n] = arr[i][j] 
          }
        }else{
          if(typeof start[i][j] === 'number'){
            start[i][j] = obj[start[i][j]]
          }
        }
      }
    }
  pass++
  }
  return start
}

console.log(volleyballPositions([
  ["empty",   "Player5", "empty"],
  ["Player4", "empty",   "Player2"],
  ["empty",   "Player3", "empty"],
  ["Player6", "empty",   "Player1"]],2))
// [
//   ["empty",   "Player1", "empty"],
//   ["Player2", "empty",   "Player3"],
//   ["empty",   "Player4", "empty"],
//   ["Player5", "empty",   "Player6"]
// ]
console.log(volleyballPositions([
  ["empty","a","empty"], 
  ["b","empty","c"], 
  ["empty","d","empty"], 
  ["e","empty","f"]],3220832))
// [["empty","f","empty"], 
//  ["c","empty","d"], 
//  ["empty","b","empty"], 
//  ["a","empty","e"]]
console.log(volleyballPositions([
  ["empty","Alice","empty"], 
["Bob","empty","Charlie"], 
["empty","Dave","empty"], 
["Eve","empty","Frank"]], 7))
// [["empty","Charlie","empty"], 
//  ["Alice","empty","Frank"], 
//  ["empty","Eve","empty"], 
//  ["Bob","empty","Dave"]]