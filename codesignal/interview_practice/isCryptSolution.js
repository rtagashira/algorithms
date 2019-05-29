// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

// Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

function isCryptSolution(crypt, solution) {
  let m = new Map(solution)
  let loopLength = Math.max(crypt[0].length,crypt[1].length,crypt[2].length)
  let word1 = ''
  let word2 = ''
  let word3 = ''
  
  for(let i=0;i<loopLength;i++){
      if(crypt[0][i]){
          word1 += m.get(crypt[0][i])
      }
      if(crypt[1][i]){
          word2 += m.get(crypt[1][i])
      }
      if(crypt[2][i]){
          word3 += m.get(crypt[2][i])
      }
  }
  if(word1.length>1 && word1[0] === '0') return false
  if(word2.length>1 && word2[0] === '0') return false
  if(word3.length>1 && word3[0] === '0') return false
  return +word1 + +word2 === +word3
}

console.log(isCryptSolution(["SEND", 
"MORE", 
"MONEY"],[["O","0"], 
["M","1"], 
["Y","2"], 
["E","5"], 
["N","6"], 
["D","7"], 
["R","8"], 
["S","9"]]))//true