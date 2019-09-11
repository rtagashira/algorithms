// Given integers p and n, find the smallest non-negative n-digit integer (represented as a string) whose digits add up to p. If there is no such number, return "-1" instead.

function reversedSumOfDigits(p, n) {
  const sum = (s) => [...s].reduce((acc,v)=>+acc + +v)
  if(sum('9'.repeat(n)) < p) return '-1'
  let str = ''
  if(p === 0){
    return n === 1? '0': '-1'
  }

  for(let i=9;i>=0;i--){
    if(str.length < n - 1){
      if(p - i > 0){
        str = i + str
        p -= i
        i = 10
      }
    }else if(str.length === n - 1){
      if(p - i === 0){
        return  i + str
      }
    }
  }
}

//too slow
// function reversedSumOfDigits(p, n) {
//   const sum = (s) => [...s].reduce((acc,v)=>+acc + +v)
//   let str = ''
//   if(sum('9'.repeat(n)) < p) return '-1'
//   if(p === 0){
//     if(n === 1)return '0'
//     else if(n > 1)return '-1'
//   }

//   while(true){
//     for(let i=9;i>=0;i--){
//       if(str.length < n - 1){
//         if(sum(str + i)<p){
//           str = i + str
//           i = 10
//         }
//       }else if(str.length === n - 1 && sum(str + i) === p){
//         str = i + str
//       }
//     }
//     if(sum(str) === p) return str
//   }
// }

console.log(reversedSumOfDigits(15,3))//'159'
console.log(reversedSumOfDigits(30,2))//'-1'
console.log(reversedSumOfDigits(2,5))//"10001"
console.log(reversedSumOfDigits(27,5))//"10899"
console.log(reversedSumOfDigits(1,20))//"10000000000000000000"
console.log(reversedSumOfDigits(0,1))//"0"
console.log(reversedSumOfDigits(15,10))//"1000000059"
console.log(reversedSumOfDigits(0,10))//"-1"