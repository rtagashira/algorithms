// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  const f = (s)=>[...s].reduce((acc,v)=>+acc + +v),
      str = n.toString(), 
       s1 = str.slice(0, str.length/2),
       s2 = str.slice(s1.length)
  return f(s1) === f(s2)
}

function isLucky(n) {
  const f = (a)=>a.reduce((acc,v)=>+acc + +v),
      arr = [...n.toString()], 
     arr1 = arr.splice(0, arr.length/2),
     arr2 = arr
  return f(arr1) === f(arr2)
}

function isLucky(n) {
  let str = n.toString(),
     sum1 = 0,
     sum2 = 0
  for(let i = 0;i<str.length;i++){
    if(i<str.length/2){
      sum1 += +str[i]
    }else{
      sum2 += +str[i]
    }
  }
  return sum1 === sum2
}

console.log(isLucky(1230))//true
console.log(isLucky(239017))//false
console.log(isLucky(123321))//true