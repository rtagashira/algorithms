// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

// Example

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

function absoluteValuesSumMinimization2(a) {
  let numArr = [a[0]]
  let sum = 0
  if(a.length>1){
    for(let i=0;i<a.length;i++){
      let newSum = a.reduce((p,c)=>p+Math.abs(c-a[i]),0)
      if(sum === 0){
        sum = newSum
      }else if(newSum<sum){
        sum = newSum
        numArr = [a[i]]
      }else if(newSum===sum){
        numArr.push(a[i])
      }
    }
  }
  return Math.min(...numArr)
}

//---------------------------------------------------------------------
function absoluteValuesSumMinimization3(A) {
  return A[Math.ceil(A.length/2)-1];
}
function absoluteValuesSumMinimization(a) {
  return a[Math.floor((a.length-1)/2)]}

console.log(absoluteValuesSumMinimization([2, 4, 7]))//4
console.log(absoluteValuesSumMinimization([-4, -1]))//-4
console.log(absoluteValuesSumMinimization([0, 7, 9]))//7
console.log(absoluteValuesSumMinimization([-10, 100, 200, 300, 400, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]))//500