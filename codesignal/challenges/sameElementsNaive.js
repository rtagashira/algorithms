// Find the number of elements that are contained in both of the given arrays.


function sameElementsNaive(a, b) {
  let count = 0
  for(let i=0;i<a.length;i++){
    if(b.indexOf(a[i])>-1){
      count++
      b.splice(b.indexOf(a[i]),1)
    }
  }
  return count
}

function sameElementsNaive(a, b) {
  const objA = {},
        objB = {},
        loop = a.length>b.length?a.length:b.length
  let  count = 0
  
  for(let i=0;i<loop;i++){
      if(i<a.length){
          objA[a[i]]? objA[a[i]]++: objA[a[i]] = 1
      } 
      if(i<b.length){
          objB[b[i]]? objB[b[i]]++: objB[b[i]] = 1
      }
  }
  
  for(let key in objA){
      if(objB[key])count++
  }
  return count
}

console.log(sameElementsNaive([1,2,3],[3,4,5]))//1
console.log(sameElementsNaive([1],[2,3,4,1]))//1
console.log(sameElementsNaive([1,2,3],[2,3,4]))//2