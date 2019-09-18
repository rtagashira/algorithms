// For a given triangle determine if it is a right triangle.

let rightTriangle = (s) =>{
  let c = Math.max(...s),
     cI = s.indexOf(c)
  s.splice(cI,1)
  return s[0] ** 2 + s[1] ** 2 === c ** 2
}

console.log(rightTriangle([3, 5, 4]))//true
console.log(rightTriangle([9, 15, 20]))//false
console.log(rightTriangle([8, 17, 15]))//true