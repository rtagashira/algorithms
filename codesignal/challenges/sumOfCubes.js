// Find the sum of cubes of all integers starting from 1 up to the given integer n, inclusive.

let sumOfCubes = (n) =>{
  let sum = 0
  for(let i=1;i<=n;i++){
      sum += i ** 3
  }
  return sum
}

console.log(sumOfCubes(3))//36
console.log(sumOfCubes(1))//1