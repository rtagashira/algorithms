// Last night you partied a little too hard.Now there's a black and white photo of you that's about to go viral! 
// You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers.The algorithm distorts the input image in the following way: 
// Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its 
// center at x, including x itself.All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

//   Example

// For

// image = [[1, 1, 1],
// [1, 7, 1],
// [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

//   For

// image = [
// [7, 4, 0, 1],
// [5, 6, 2, 2],
// [6, 10, 7, 8],
// [1, 4, 2, 0]]
// the output should be

// boxBlur(image) = [[5, 4],
// [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output.To get the first value: 
// (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] array.array.integer image

// An image, stored as a rectangular matrix of non - negative integers.

// Guaranteed constraints:
// 3 ≤ image.length ≤ 10,
//   3 ≤ image[0].length ≤ 10,
//     0 ≤ image[i][j]≤ 255.

//     [output] array.array.integer

// A blurred image represented as integers, obtained through the process in the description.

function boxBlur(arr){
  let finalArr = []
  for(let i=0;i<arr.length;i++){                             //i is rows
    if(i!=0 && i!=arr.length-1){
      finalArr.push([])
    }
    for(let j=0;j<arr[0].length;j++){                        //j is columns
      if(i>0 && i<arr.length-1 && j>0 && j<arr[0].length-1){ // leave out borders
        let sum = arr[i-1][j]+arr[i-1][j-1]+arr[i-1][j+1]+   //add up the 9 number grid
                  arr[i][j-1]+arr[i][j]+arr[i][j+1]+
                  arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1]
        let average = Math.floor(sum/9)                       // get the average
        finalArr[i-1].push(average)                           //push average into final array
      }
    }
  }
  return finalArr
}


function boxBlur2(arr) {
  let colArrs = arr[0].length-2
  let rowArrs = arr.length - 2
  let row = 0
  let col = 0
  let finalArr = [[]]
  while(row<rowArrs){
    if (col === colArrs) { col = 0 }
    while(col<colArrs){  
      finalArr[row].push(Math.floor(arr[row].slice(col, col + 3).concat(arr[row + 1].slice(col, col + 3)).concat(arr[row + 2].slice(col, col + 3))
        .reduce((acc, cur, index, array) => {
          if (index != array.length - 1) {
            return acc + cur
          } else {
            return (acc + cur) / array.length
          }
        })
      ))
      col++
    }
    if(row!=rowArrs-1){finalArr.push([])}
    row++
  }
  return finalArr
}

//---------------------------------------------------------------------------
/*boxBlur = I => {
  //Slice off the border
  var B = I.slice(1, -1).map(e => e.slice(1, -1))

  //Replace every element with the average
  // of its neighbors
  return B.map((row, i) =>
    row.map((elem, j) => {
      var sum = 0
      for (var x = 0; x < 3; ++x)
        for (var y = 0; y < 3; ++y)
          sum += I[i + x][j + y]
      return sum / 9 | 0
    })
  )
}
*/



console.log(boxBlur([[1, 1, 1],[1, 7, 1],[1, 1, 1]]));//[[1]]
console.log(boxBlur([[7, 4, 0, 1],[5, 6, 2, 2],[6, 10, 7, 8],[1, 4, 2, 0]]));//[[5, 4],[4, 4]]
console.log(boxBlur([[36, 0, 18, 9], [27, 54, 9, 0], [81, 63, 72, 45]]));//[[40,30]]
console.log(boxBlur([
[36, 0, 18, 9, 9, 45, 27],
[27, 0, 54, 9, 0, 63, 90],
[81, 63, 72, 45, 18, 27, 0],
[0, 0, 9, 81, 27, 18, 45],
[45, 45, 27, 27, 90, 81, 72],
[45, 18, 9, 0, 9, 18, 45],
[27, 81, 36, 63, 63, 72, 81]]));
//  [[39, 30, 26, 25, 31], 
//   [34, 37, 35, 32, 32],
//   [38, 41, 44, 46, 42],
//   [22, 24, 31, 39, 45],
//   [37, 34, 36, 47, 59]]

