// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//   Example

// For

// picture = ["abc",
//   "ded"]
// the output should be

// addBorder(picture) = 
//  ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]
// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.string picture

// A non - empty array of non - empty equal - length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
//   1 ≤ picture[i].length ≤ 100.

//   [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(arr) {
  let length = arr[0].length
  let newArr = arr.map((x)=>'*'+x+'*')
  return ['*'.repeat(length+2),...newArr, '*'.repeat(length+2)]
         
}


console.log(addBorder(["abc", "ded"]))
                                      // ["*****", "*abc*", "*ded*", "*****"]