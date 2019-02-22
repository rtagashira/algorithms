// You are standing at a magical well. It has two positive integers written on it: a and b. 
// Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b 
// increase by 1. You have n magic marbles. How much money will you make?

function magicalWell(a, b, n) {
  let total = 0
  for(let i=1;i<=n;i++){
    total+=a*b
    a++
    b++
  }
  return total
}

console.log(magicalWell(1,2,2))//8