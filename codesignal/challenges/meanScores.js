// You've been enjoying your time at computer school, and you're now taking an interesting course on quantum encryption.

// Your instructor has a marking philosophy that's very different from the last course you took - she believes that every 
// grade should influence your final mark, so your performance will be judged according to the mean of all your test and assignment grades.

// Since you'd like to know how you're doing as the course progresses, you'd like to write an algorithm that calculates 
// your mean grade every time you enter a new mark (ie: every time a graded assignment or test comes back).

// Given scores, an array of integers representing all your test and assignment grades, your task is to return an array 
// of integers where output[i] represents the mean of all your scores up to index i.Your instructor is a harsh marker, 
// so she always rounds the result down to the nearest integer.

//   Example

// For scores = [100, 20, 50, 70, 45], the output should be meanScores(scores) = [100, 60, 56, 60, 57].


function meanScores(arr) {
  let mean = [arr[0]]
  let sum = arr[0]
  for(let i=1;i<arr.length;i++){
    sum += arr[i]
    mean.push(Math.floor(sum/(i+1)))
  }
  return mean
}

function meanScores(arr) {
  let sum = 0
  return arr.reduce((acc,v,i,array)=>{
    sum += v
    return [...acc, Math.floor(sum/(i+1))]
  },[])
}

console.log(meanScores([100, 20, 50, 70, 45]))//[100, 60, 56, 60, 57]