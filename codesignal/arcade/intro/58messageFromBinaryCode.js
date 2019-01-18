// You are taking part in an Escape Room challenge designed specifically for programmers. 
// In your efforts to find a clue, you've found a binary code written on the wall behind a vase, 
// and realized that it must be an encrypted message. After some thought, your first guess is that 
// each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

// Assuming that your hunch is correct, decode the message.


function messageFromBinaryCode(code) {
  return code.match(/.{8}/g).map(x=>String.fromCharCode(parseInt(x,2))).join('')
}

//--------------------------------------------------------------------------------------
function messageFromBinaryCode(code) {
  return code.match(/.{8}/g).reduce((a,b)=>a+String.fromCharCode(parseInt(b,2)),"")
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"))//"Hello!"




let num = 88
let binary = num.toString(2)
let decimal = parseInt(binary,2)
let letter = String.fromCharCode(decimal)
console.log(binary)
console.log(decimal)
console.log(letter);
