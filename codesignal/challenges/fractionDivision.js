// Implement a function that can divide two fractions and produce a reduced fraction.

function fractionDivision(a, b) {
  const crossMultiply = [a[0] * b[1], b[0]* a[1]]
  for(let i = Math.min(...crossMultiply);i>=2;i--){
      if(crossMultiply[0] % i === 0 && crossMultiply[1] % i === 0) return [crossMultiply[0] / i, crossMultiply[1] / i]
  }
  return crossMultiply
}

console.log(fractionDivision([2, 3],[5, 6]))//[4, 5]
console.log(fractionDivision([9, 4],[3, 4]))//[3, 1]