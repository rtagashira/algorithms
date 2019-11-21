// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

let magicalWell = (a, b, n) =>{
  let total = 0
  while(n){
      total += a*b
      n--
      a++
      b++
  }
  return total
}

console.log(magicalWell(1,2,2))//8
console.log(magicalWell(1,1,1))//1
console.log(magicalWell(6,5,3))//128