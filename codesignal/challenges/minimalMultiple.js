// Find the smallest multiple of the given number that's not less than a specified lower bound.

let minimalMultiple = (d, b) => {
  let i = d
  while(i < b){
      i += d
  }
  return i
}

console.log(minimalMultiple(5,12))//15
console.log(minimalMultiple(1,239))//239
console.log(minimalMultiple(15,1))//15