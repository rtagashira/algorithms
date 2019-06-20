// You are given a positive integer x and you should perform n operations, where on the ith operation you increase x in such a way that its new value is divisible by i (operations are numbered from 1 to n).

// Find the minimal value of x you can obtain by performing n operations described above.

function increasingNumber(x, n) {
  for(let i=1;i<=n;i++){
    for(let j=0;j<=x*i;j++){
      if((x+j) % i === 0){
        x += j
        break
      }
    }
  }
  return x
}

console.log(increasingNumber(9,5))//15
console.log(increasingNumber(1,100))//100
console.log(increasingNumber(4,5))//10