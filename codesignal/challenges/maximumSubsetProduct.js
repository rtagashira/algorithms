// In this problem, the product of the elements of an arbitrary array x is expressed as p(x).

// You are given an array of integers a. Any array that you can obtain from a by removing some elements (possibly none, but not all) is denoted as s. Among all such arrays s, what is the maximum possible value of p(s)? Since the answer could potentially be very large, return the value of p(a) / p(s) instead.

function maximumSubsetProduct(a) {
  const negs = a.filter(x=>x<0)
  const negNums = negs.length
  if(a.length === 1){
    return 1
  }else if(negNums % 2 === 1){
    negs.sort((a,b)=>a-b)
    return negs[negs.length - 1]
  }else{
    return 1
  }
}


console.log(maximumSubsetProduct([1, 2, -2, -3, 3, 5]))//1
console.log(maximumSubsetProduct([10,-10]))//-10
console.log(maximumSubsetProduct([-4, -2, 10, 20, -3]))//-2
console.log(maximumSubsetProduct([-1]))//1
console.log(maximumSubsetProduct([1000000000, -1000000000]))//-1000000000