// The factorial of n is defined as the product of all natural numbers up to and including n - 1 * 2 * 3 * ... * n. The quasifactorial of n is different in that after each multiplication the result is decreased by one. So the quasifactorial of n is (...((1 * 2 - 1) * 3 - 1) * ... * n - 1). The quasifactorial of 1 is 1.

// Given a positive integer n, calculate its quasifactorial.

function quasifactorial(n) {
  let total = 1
  for(let i=2;i<=n;i++){
    total = total * i - 1
  }
  return total
}

console.log(quasifactorial(4))//7