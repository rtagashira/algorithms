// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.


function leastFactorial(n) {
  let num = 1 
  for(let i=1;i<=n;i++){
    num*=i
    if(num>=n)return num
  }
}

console.log(leastFactorial(17))//24
console.log(leastFactorial(1))//1