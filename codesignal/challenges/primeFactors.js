// Write an algorithm that constructs an array of non unique prime factors of a number n.

function primeFactors(n) {
  let arr = []
  let i = 2
  while(n>1){
    if(n % i === 0){
      n /= i
      arr.push(i)
      i = 2
      continue
    }
    i ++
  }
  return arr
}

console.log(primeFactors(100))//[2, 2, 5, 5]
console.log(primeFactors(1))//[]
console.log(primeFactors(2))//[2]