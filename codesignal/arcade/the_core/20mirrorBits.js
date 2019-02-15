// Reverse the order of the bits in a given integer.

function mirrorBits(n) {
  return parseInt(n.toString(2).split('').reverse().join(''),2)
}
//----------------------------------------------------------------------------
function mirrorBits(a) {
  return parseInt([...a.toString(2)].reverse().join(''), 2);
}


console.log(mirrorBits(97))//67
console.log(mirrorBits(8))//1
