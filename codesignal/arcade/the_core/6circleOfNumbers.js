// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance 
// between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function circleOfNumbers(n, firstNumber) {
  if(firstNumber === n/2) return 0
  if(firstNumber === 0) return n/2
  return firstNumber>n/2? firstNumber - n/2: firstNumber + n/2
}

//---------------------------------------------------------------------
function circleOfNumbers(n, firstNumber) {
  return (firstNumber + n / 2) % n;
}

console.log(circleOfNumbers(10,2))//7
console.log(circleOfNumbers(6,3))//0