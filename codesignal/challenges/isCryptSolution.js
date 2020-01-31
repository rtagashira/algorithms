// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

// Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

const isCryptSolution = (crypt, solution) =>{
    let map = new Map(solution),
        w1  = '',
        w2  = '',
        w3  = ''
    
    for(let i=0;i<crypt[2].length;i++){
        if(i<crypt[0].length){
            w1 += map.get(crypt[0][i])
        }
        if(i<crypt[1].length){
            w2 += map.get(crypt[1][i])
        }
        w3 += map.get(crypt[2][i])
    }
    if(w1[0] === '0' && w1.length > 1) return false
    if(w2[0] === '0' && w2.length > 1) return false
    if(w3[0] === '0' && w3.length > 1) return false
    return +w1 + +w2 === +w3
}

console.log(isCryptSolution(
["SEND", 
"MORE", 
"MONEY"],
[["O","0"], 
["M","1"], 
["Y","2"], 
["E","5"], 
["N","6"], 
["D","7"], 
["R","8"], 
["S","9"]]))//true
console.log(isCryptSolution(
["TEN", 
"TWO", 
"ONE"],
[["O","1"], 
["T","0"], 
["W","9"], 
["E","5"], 
["N","4"]]))//false
console.log(isCryptSolution(
["ONE", 
"ONE", 
"TWO"],
[["O","2"], 
["T","4"], 
["W","6"], 
["E","1"], 
["N","3"]]))//true