// Given a sequence of integers as an array, determine whether it is possible to obtain a 
// strictly increasing sequence by removing no more than one element from the array.

//   Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence[1, 2].
// Alternately, you can remove 2 to get the strictly increasing sequence[1, 3].


function almostIncreasingSequence1(sequence) {
  let sequence2 = [...sequence]
  result = false
  // iterate over dup array taking out one number per loop and returning it after
  for(let i=0;i<sequence.length;i++){
    if(result === true){ return true}
  let removedNum = sequence2.splice(i, 1)
    // iterate over the dup array to see if it is increasing
      result = sequence2.reduce((acc,cur,index,array)=>{
        if(acc === false){
          return false
        }else if(cur>array[index-1]){
          return true
        }else{
          return false
        }
      })
    // sequence2 = [...sequence]
    sequence2.splice(i,0,removedNum)
  }
  return result
}



function almostIncreasingSequence(seq) {
  var dup = 0
  for (var i = 1; i < seq.length; i++) if (seq[i] <= seq[i - 1]) {
    dup++
    if (dup > 1) return false
    if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
  }
  return true
}


console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 4, 10, 4, 2]))//false
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))//true 
console.log(almostIncreasingSequence([1, 2, 1, 2]))//false
console.log(almostIncreasingSequence([1, 2, 5, 3, 5]))//true
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))//true
