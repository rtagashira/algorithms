// Given the positions of a white bishop and a black pawn on the standard chess board, 
// determine whether the bishop can capture the pawn in one move.

function bishopAndPawn2(b, p) {
  let letters = 'abcdefgh'
  let bIndex = letters.indexOf(b[0])
  let pIndex = letters.indexOf(p[0])
  let distance = Math.abs(bIndex - pIndex)
  if(distance === Math.abs(b[1]-p[1])){
    return true
  }else{
    return false
  }
}

//---------------------------------------------------------------------
function bishopAndPawn(bishop, pawn) {
  return Math.abs(bishop[0].charCodeAt()-pawn[0].charCodeAt())===Math.abs(bishop[1]-pawn[1])
}

console.log(bishopAndPawn('a1','c3'))//true
console.log(bishopAndPawn('h1','h3'))//false