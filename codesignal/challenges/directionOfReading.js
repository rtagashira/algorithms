// You have an array of non-negative integers numbers, each less than 10numbers.length. Add leading zeros if necessary so that for each i, numbers[i] has exactly numbers.length digits. Now, write these integers under each other in the same order that they appear in the input array.

// From this process, you obtain a square that consists of digits. If you read them from left to right, starting from the topmost row, and drop the leading zeros, you get the initial array. What array will you get if you read the digits from the top down, starting from the leftmost column, and ignoring leading zeros?

function directionOfReading(arr) {
  //add zeros to the beginning of each element
  let strArr = arr.map(x=>'0'.repeat(arr.length - x.toString().length) + x)
  //build finalArr with nested loop
  let finalArr = []
  for(let i=0;i<strArr.length;i++){
    for(let j=0;j<strArr[i].length;j++){
      finalArr[j]? finalArr[j] += strArr[i][j] : finalArr[j] = strArr[i][j]
    }
  }
  // convert strings to numbers
  return finalArr.map(x=>+x)
}

console.log(directionOfReading([12, 345, 67, 5]))//[0, 300, 1460, 2575]