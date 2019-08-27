// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

function digitsProduct(p) {
  if(p===0)return 10
  if(p===1)return 1

  let str = ''
  let i=9
  let m = 0
  while(p>1){
    if(p%i ===0){
      str = i + str
      p /= i
      i = 9
      m = 0
    }else{
      i--
      m++
      if(m>7) return -1
    }
  }
  return +str
}

// too slow
// function digitsProduct(p) {
//   if(p===1) return 1
//   const notPrime = (n) =>{
//     for(let i=2;i<n;i++){
//       if(n%i===0)return true
//     }
//     return false
//   }

//   if(p===0||notPrime(p)){
//     let i = 1
//     while(true){
//       let str = i.toString()
//       const product = (s)=> +[...str].reduce((acc,v)=>+acc * +v)
//       if(product(str)===p) return i
//       i++
//     }
//   }else{
//     return -1
//   }
// }

console.log(digitsProduct(12))//26
console.log(digitsProduct(19))//-1
console.log(digitsProduct(450))//2559
console.log(digitsProduct(0))//10
console.log(digitsProduct(13))//-1
console.log(digitsProduct(1))//1
console.log(digitsProduct(243))//399
console.log(digitsProduct(576))//889
console.log(digitsProduct(360))//589