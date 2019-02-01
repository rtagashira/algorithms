// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call 
// (in minutes rounded down to the nearest integer) you can have?

function phoneCall(min1, min2_10, min11, s) {
  let time = 0
  //min 1
  if(s<min1)return time
  time+=1
  s-=min1
  //min 2-10
  let min = 2
  while(min<=10){
    if(s===0)return time
    time++
    s-=min2_10
    min++
    if(s<min2_10)return time  
  }  
  //min 11+
  while(s>0){
    time++
    s-=min11
    if(s<min11)return time
  }
  return time
}

console.log(phoneCall(3,1,2,20))//14
console.log(phoneCall(10,1,2,22))//11
console.log(phoneCall(2,2,1,24))//14
console.log(phoneCall(1,2,1,6))//3
