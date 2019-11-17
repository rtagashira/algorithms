// The NAND operation (also known as a Sheffer stroke) is an operation on two logical values. It produces true, if - and only if - at least one of the operands is false.

// Given two boolean values a and b, return the value of A NAND B.

let shefferStroke = (a, b) => a === false || b === false

console.log(shefferStroke(true,true))//false
console.log(shefferStroke(false,true))//true
console.log(shefferStroke(true,false))//true