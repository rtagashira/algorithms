// Given an array of strings, return another array containing all of its longest strings.

//   Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings1(arr) {
  let wordLength = arr[0].length
  let finalArr = []
  for(const word of arr){
    if(word.length> wordLength){
      wordLength = word.length
    }
  }
  for(const word of arr){
    if(word.length === wordLength){
      finalArr.push(word)
    }
  }
  return finalArr
}

function allLongestStrings2(arr) {
  return arr.reduce((p,c,i,array)=>{
    if(i===0){
      return [c]
    }else if(c.length>p[0].length){
      return [c]
    }else if(c.length===p[0].length){
      return [...p,c]
    }else{
      return p
    }
  },[])
}

function allLongestStrings(inputArray) {
  'use strict';
  let maxSize = Math.max(...inputArray.map(x => x.length));
  return inputArray.filter(x => x.length === maxSize);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))//['aba','vcd','aba']
console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]))//['eeee','abcd']
