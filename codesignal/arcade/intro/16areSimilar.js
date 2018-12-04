// Two arrays are called similar if one can be obtained from another by swapping at most one 
// pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

//   Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer a

// Array of integers.

// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
//   1 ≤ a[i]≤ 1000.

//   [input] array.integer b

// Array of integers of the same length as a.

// Guaranteed constraints:
// b.length = a.length,
//   1 ≤ b[i]≤ 1000.

//   [output] boolean

// true if a and b are similar, false otherwise.

function areSimilar(a, b) {
  let count = 0
  let diffs = []
  for(let i=0;i<a.length;i++){          //count the differences and put them in an array
    if(a[i]!=b[i]){
      diffs.push(a[i],b[i])
      count++
    }
  }
  if(count>2){                          //more than 2 difference = false
    return false
  }else{                    
    return diffs.reduce((p,c,i,arr)=>{   //make sure the differences are only 2 duplicate pairs
     if(arr.filter(x=>x===c).length<2){
       return false
     }else{
       return p
     }
    },true)
  }
}

//----------------------------------------------------------------------------------------
function areSimilar2(a, b) {
  const ad = a.filter((v, i) => v != b[i])
  const bd = b.filter((v, i) => v != a[i])
  return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

function areSimilar3(A, B) {
  for (var r = [], i = 0; i < A.length; i++) if (A[i] != B[i]) r.push(A[i], B[i])
  return r.length < 5 && new Set(r).size < 3
}



console.log(areSimilar([1,2,3],[1,2,3]))//true
console.log(areSimilar([1,2,2],[2,1,1]))//false
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]))//true
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]))//false
console.log(areSimilar([1, 1, 4], [1, 2, 3]))//false


