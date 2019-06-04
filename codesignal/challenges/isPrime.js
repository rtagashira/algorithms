// Implement a function that determines if a given positive integer is a prime or not.

function isPrime(n) {
  for(let i=2;i<n;i++){
      if(n % i === 0) return false
  }
  return true
}

console.log(isPrime(47))//true
console.log(isPrime(4))//false