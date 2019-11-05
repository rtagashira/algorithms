// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

let bishopAndPawn = (b, p) => Math.abs(b.charCodeAt(0) - p.charCodeAt(0)) === Math.abs(+b[1] - +p[1])

console.log(bishopAndPawn('a1','c3'))//true
console.log(bishopAndPawn('h1','h3'))//false
console.log(bishopAndPawn('a5','c3'))//true
console.log(bishopAndPawn('g1','f3'))//false
console.log(bishopAndPawn('e7','d6'))//true
console.log(bishopAndPawn('e7','a3'))//true