// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

const deleteDigit = (n) =>{
  let num,
      str = n.toString()
  for(let i=0;i<str.length;i++){
      let temp = str.slice(0,i) + str.slice(i+1)
      if(num === undefined){
          num = +temp
      }else if(+temp > num){
          num = +temp
      }
  }
  return num
}

console.log(deleteDigit(152))//52
console.log(deleteDigit(1001))//101
console.log(deleteDigit(218616))//28616