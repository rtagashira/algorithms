// Define crossover operation over two equal-length strings A and B as follows:

// the result of that operation is a string of the same length as the input strings
// result[i] is either A[i] or B[i], chosen at random
// Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

// Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

function stringsCrossover(arr, result) {
  let matches = 0
  let match = false
  const f = (str1,str2,i,str)=>{
    if(i === str1.length){
      if(str === result) match = true
    }else{
      f(str1,str2,i+1,str + str1[i])
      f(str1,str2,i+1,str + str2[i])
    }
  }

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] === result || arr[j] === result){
        matches++
      }else{
        match = false
        f(arr[i],arr[j],0,'')
        if(match) matches++
      }
    }
  }
  return matches
}

console.log(stringsCrossover(["abc", "aaa", "aba", "bab"],"bbb"))//2
console.log(stringsCrossover(["a", "b", "c", "d", "e"],"c"))//4
console.log(stringsCrossover(["aaa", "aaa"],"aaa"))//1
console.log(stringsCrossover(["aaa", "bba"],"aba"))//1