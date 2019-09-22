// Given an integer N (N <= 1000). Find out how many positive integers exists that are smaller than N and can be represented using only 0, 4, 7.

let HowManyIntegers = (N) => {
  let count = 0
  for(let i=1;i<N;i++){
    let str = i.toString()
    if(!str.match(/[^047]/)) count++
  }
  return count
}

console.log(HowManyIntegers(1))//0
console.log(HowManyIntegers(120))//8
console.log(HowManyIntegers(60))//5