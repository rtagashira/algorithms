// Given integers n and k, find the kth divisor (1-based) of n or determine if n has less than k divisors.

function kthDivisor(n, k) {
  let a = []
  for(let i=1;i<=n;i++){
    if(n % i === 0) a.push(i)
  }
  return k <= a.length? a[k-1]: -1
}

console.log(kthDivisor(63,4))//9
console.log(kthDivisor(5,3))//-1
console.log(kthDivisor(100,10))//-1
console.log(kthDivisor(16,5))//16
console.log(kthDivisor(239,3))//-1