// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, 
// column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

function additionWithoutCarrying(n1, n2) {
  //convert to strings
  str1 = n1.toString()
  str2 = n2.toString()
  //make strings equal lengths
  if(str1.length < str2.length){
    str1 = '0'.repeat(str2.length-str1.length) + str1
  }else if(str2.length < str1.length){
    str2 = '0'.repeat(str1.length-str2.length) + str2
  }
  //build a string using only the ones place of the sum of the relative digits
  let result = ''
  for(let i=0;i<str1.length;i++){
    result += (+str1[i] + +str2[i]) % 10
  }
  return +result
}




console.log(additionWithoutCarrying(456,1734))//1180