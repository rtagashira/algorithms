// Given an integer n, find the minimal k such that

//     k = m! (where m! = 1 * 2 * ... * m) for some integer m;
//     k >= n.

// In other words, find the smallest factorial which is not less than n.

function leastFactorial(n) {
  let num = 1,
        i = 2
  while(true){
    if(num>=n)return num
    num *= i
    i++
  }
}

console.log(leastFactorial(17))//24
console.log(leastFactorial(1))//1
console.log(leastFactorial(25))//120
console.log(leastFactorial(24))//24