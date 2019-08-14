// Given an integer n, find the value of phi(n), where phi is Euler's totient function.

// Euler’s totient or phi function is an arithmetic function that counts the positive integers less than or equal to n that are relatively prime to n.

// Two integers are said to be relatively prime (or coprime) if the only positive integer that evenly divides both of them is 1.

function eulersTotientFunction(n) {
  let c = 0
  for(let i=1;i<=n;i++){
    let d
    for(let j=2;j<=i;j++){
      if(i % j === 0 && n % j === 0) d = true
    }
    if(!d) c++
  }
  return c
}

console.log(eulersTotientFunction(5))//4
console.log(eulersTotientFunction(49))//42
console.log(eulersTotientFunction(1))//1
console.log(eulersTotientFunction(69))//44