// Count the number of different edges in a given undirected graph with no loops and multiple edges.

function graphEdges(matrix) {
  let edges = 0
  for(let i in matrix){
      edges += matrix[i].filter((x,j)=>x && j>i).length 
  }
  return edges
}

console.log(graphEdges([
  [false,true,true], 
  [true,false,false], 
  [true,false,false]]))//2
console.log(graphEdges([
  [false,false,false], 
  [false,false,false], 
  [false,false,false]]))//0
console.log(graphEdges([
  [false,true,true], 
  [true,false,true], 
  [true,true,false]]))//3
console.log(graphEdges([
  [false,true,false,true,true,true], 
  [true,false,true,true,false,true], 
  [false,true,false,true,true,true], 
  [true,true,true,false,true,true], 
  [true,false,true,true,false,false], 
  [true,true,true,true,false,false]]))//12