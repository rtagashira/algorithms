// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs 
// (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.


function swapAdjacentBits(n) {
  return n.toString(2).length%2 === 0? parseInt(n.toString(2).replace(/(.)(.)/g, '$2'+'$1'),2):parseInt(('0'+ n.toString(2)).replace(/(.)(.)/g, '$2'+'$1'),2) ;
}
//---------------------------------------------------------------------------------------------------
function swapAdjacentBits(n) {
  return ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
}

console.log(swapAdjacentBits(13))//14
                                // 1101
                                // 1110
console.log(swapAdjacentBits(74))//133
                                // 10000101