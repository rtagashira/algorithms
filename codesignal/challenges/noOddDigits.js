// Given a non-negative integer number, remove all of its odd digits (if all of the digits are removed, return zero).

function noOddDigits(n) {
  let str = [...n.toString()].filter(x=>x % 2 === 0).join('')
  return str.length>0? +str: 0
}

function noOddDigits(n) {
  let str = n.toString()
  let str2 = ''
  for(let char of str){
    if(+char % 2 === 0)str2 += char
  }
  if(str2.length === 0){
    return 0
  }else{
    return +str2
  }
}

console.log(noOddDigits(12345678))//2468
console.log(noOddDigits(299752))//22
console.log(noOddDigits(1))//0


//----------------------------------
// function noOddDigits(n) {
// 	return +('' + n).replace(/[13579]/g, '')
// }
