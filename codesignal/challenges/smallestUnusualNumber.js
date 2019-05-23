// Let's call an integer unusual if the sum of its digits is larger than the product of its digits. For example, the numbers 21 and 990 are unusual, while the numbers 22 and 991 aren't.

// Given an integer a (represented as a string), find the smallest unusual integer x such that x ≥ a. Since both x and a can be very large, return the value of x - a.


function smallestUnusualNumber(str){
  if(str.includes('0')){
    return 0
  }else if([...str].filter(x=>x!='1').length <= 1 && str.length > 1){
    return 0
  }else{
    return 10 - str[str.length - 1]
  } 
}


console.log(smallestUnusualNumber('42'))//8
console.log(smallestUnusualNumber("1000000000000000000000000000000000000"))//0
console.log(smallestUnusualNumber("8888888888888888888888888888888"))//2