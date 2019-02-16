// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation 
// (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit.

function secondRightmostZeroBit2(n) {
  let binary = n.toString(2)
  let zeroCount = 0
  let exp = 0
  for(let i=binary.length-1;i>=0;i--){
    if(binary[i]=='0')zeroCount++
    if(i!=binary.length-1)exp++
    if(zeroCount === 2)return 2**exp
  }
}
//--------------------------------------------------------------------------
function secondRightmostZeroBit3(n) {
  return 2 ** (n.toString(2).match(/01*01*$/)[0].length-1)
}
function secondRightmostZeroBit4(n) {
  return 1 << (n.toString(2).match(/01*01*$/)[0].length-1)
}

function secondRightmostZeroBit(n) {
  return ~(n | n+1) & -~(n | n+1)
}
function secondRightmostZeroBit(n) {
  return ~(n |= n+1) & n + 1
}



console.log(secondRightmostZeroBit(37))//8

