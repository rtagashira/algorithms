// Implement a function that can subtract two reduced fractions and produce a new one.

function fractionSubtraction(a, b) {
  const reduce = (arr) => {
    const small = Math.min(...arr)
    const big = Math.max(...arr)
    for(let i=small;i>=2;i--){
      if(small % i === 0 && big % i === 0){
        arr = [arr[0] / i, arr[1] / i]
        break
      }
    }
    return arr
  }
  if(a[1] === b[1]){
    return reduce([a[0]-b[0], a[1]])
  }else{
    const commonDenominator = a[1] * b[1]
    let multiplier = commonDenominator / a[1]
    const newA = [a[0] * multiplier, commonDenominator]
    multiplier = commonDenominator / b[1]
    const newB = [b[0] * multiplier, commonDenominator]
    return fractionSubtraction(newA,newB)
  }
}

console.log(fractionSubtraction([7, 10],[3, 10]))//[2, 5]
console.log(fractionSubtraction([2, 3],[2, 5]))//[4,15]