// For given n and k find the sum of all multiples of k that are not greater than n.

const sumOfMultiples = (n, k) => {
  let sum = 0,
      m   = k
  while(m <= n){
      sum += m
      m += k
  }
  return sum
}

console.log(sumOfMultiples(7,2))//12
console.log(sumOfMultiples(4,1))//10