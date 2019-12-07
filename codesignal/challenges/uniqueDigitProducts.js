// Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.

let uniqueDigitProducts = (a) =>{
  let s = new Set(),
      p = (n) => [...n.toString()].reduce((acc,v)=>acc * v)
  for(let num of a){
    s.add(+p(num))
  }
  return s.size
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]))//3
console.log(uniqueDigitProducts([239]))//1
console.log(uniqueDigitProducts([100, 101, 111]))//2
console.log(uniqueDigitProducts([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488]))//10
console.log(uniqueDigitProducts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))//10