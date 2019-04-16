//    *
//   ***
//  *****
// *******
//   ...

// You'd like to decorate the tree in such a way that there's a light on every * of the tree. 
// Given n, an integer representing the number of rows in scheme - the height of the tree, 
// your task is to determine how many lights you'll need in total.

function christmasTreeLights(n) {
  return n*n
}

console.log(christmasTreeLights(1))//1
console.log(christmasTreeLights(2))//4
console.log(christmasTreeLights(4))//16
console.log(christmasTreeLights(2512))//6310144