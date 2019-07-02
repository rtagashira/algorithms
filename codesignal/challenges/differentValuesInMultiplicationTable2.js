// Define a multiplication table of size n by m as follows: such table consists of n rows and m columns. Cell on the intersection of the ith row and the jth column (i, j > 0) contains the value of i * j.

// Given integers n and m, find the number of different values that are found in the table.

function differentValuesInMultiplicationTable2(n, m) {
  let s = new Set()
  for(let i=1;i<=n;i++){
      for(let j=1;j<=m;j++){
          s.add(i * j)
      }
  }
  return s.size
}

console.log(differentValuesInMultiplicationTable2(3,2))//5
console.log(differentValuesInMultiplicationTable2(4,4))//9
console.log(differentValuesInMultiplicationTable2(1,20))//9
console.log(differentValuesInMultiplicationTable2(7,5))//22