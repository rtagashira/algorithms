// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

// Return the value of 2position_of_the_found_pair (0-based).

function equalPairOfBits(n, m) {
  return  ~(n^m) & (n^m)+1 ;
}

console.log(equalPairOfBits(10,11))//2
console.log(equalPairOfBits(0,0))//1
console.log(equalPairOfBits(1073741824,1006895103))//262144
