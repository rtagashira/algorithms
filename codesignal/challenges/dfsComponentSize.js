// Given an undirected graph and some vertex index, find the size of the connected component of that vertex.

// For an undirected graph, a connected component is a set of all nodes which can be reached from each other and cannot be reached from any other node of this graph.

function dfsComponentSize(matrix, vertex) {
  let s = new Set()
  const f = (a) =>{
    for(let i in a){
      if(a[i]){
        if(!s.has(i)){   
          s.add(i)
          f(matrix[i])
        }
      }
    }
  }
  f(matrix[vertex])
  return s.size === 0? 1: s.size
}

console.log(dfsComponentSize([
  [false, true, false],
  [true, false, false],
  [false, false, false]],0))//2
console.log(dfsComponentSize([
  [false,false,false], 
  [false,false,false], 
  [false,false,false]],0))//1
console.log(dfsComponentSize([
  [false,true,false,true], 
  [true,false,true,false], 
  [false,true,false,true], 
  [true,false,true,false]],2))//4