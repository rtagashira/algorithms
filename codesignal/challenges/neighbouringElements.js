// Find the number of unique pairs of neighboring elements with equal values in the given matrix.

// Two elements of a matrix are considered neighboring if their indices are equal on one axis and differ by one on the other axis.

const neighbouringElements = (a) => {
  let c = 0
  for(let i=0;i<a.length;i++){
    for(let j=0;j<a[0].length;j++){
      if(a[i][j] === a[i][j + 1]) c++
      if(i<=a.length -2){
        if(a[i][j] === a[i+1][j]) c++
      }
    }
  }
  return c
}

console.log(neighbouringElements([
  [1,1,1], 
  [1,1,1], 
  [1,1,1]]))//12
console.log(neighbouringElements([
  [0,1,2,3], 
  [1,2,3,0], 
  [2,3,1,0]]))//1