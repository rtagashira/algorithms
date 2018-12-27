// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, 
// and the second item weighs weight2 and is worth value2. What is the total maximum value of 
// the items you can take with you, assuming that your max weight capacity is maxW and you can't
//  come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. 
// you can't take two first items or two second items.

function knapsackLight2(value1, weight1, value2, weight2, maxW) {
  if(weight1+weight2 <= maxW){
    return value1 + value2
  }else if(weight1<=maxW && weight2<=maxW){
    return Math.max(value1,value2)
  }else if(weight1<= maxW){
    return value1
  }else if(weight2<= maxW){
    return value2
  }
  return 0
}
//-------------------------------------------------------------------------
function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return Math.max(
      maxW >= weight1 && value1,
      maxW >= weight2 && value2,
      maxW >= weight1 + weight2 && value1 + value2
  );
}

console.log(knapsackLight(10,5,6,4,8))//10
console.log(knapsackLight(10,5,6,4,9))//16
console.log(knapsackLight(5,3,7,4,6))//7