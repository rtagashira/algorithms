// Find the sum of squares of all integers from 1 up to and including given N.

function sumOfSquares(n, i=1, s=0) {
  s += i * i
  if(i===n)return s
  else return sumOfSquares(n,i+1, s)
}

function sumOfSquares(n) {
  let s = 0
  let f = (n,i=1)=>{
    s += i ** 2
    if(i===n)return
    else{f(n,i+1)}
  }
  f(n)
  return s
}

function sumOfSquares(n) {
  let sum = 0
  for(let i=1;i<=n;i++){
      sum += i ** 2
  }
  return sum
}

function sumOfSquares(n) {
  let sum = 0,
        i = 1
  while(i<=n){
      sum += i ** 2
      i++
  }
  return sum
}

console.log(sumOfSquares(5))//55
console.log(sumOfSquares(1))//1