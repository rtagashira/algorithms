
    // Let the integer n be represented by digits a1, a2, ..., ak (the digits are listed from left to right in the order they appear in the decimal representation of n).
    // Define bi = |ai + 1 - ai|.
    // Construct the number from the digits b1, b2, ..., bk - 1 (in that order). Let's call the resulting value a digit distance number for n.


  let digitDistanceNumber = (n) => {
    let str  = n + '',
        str2 = ''
    for(let i in str){
      if(i>0)str2 += Math.abs(str[i] - str[i-1])
    }
    return +str2
  }
  
  let digitDistanceNumber = (n) => {
    let str  = n + '',
        str2 = ''
    for(let i=1;i<str.length;i++){
      str2 += Math.abs(str[i] - str[i-1])
    }
    return +str2
  }
  
  console.log(digitDistanceNumber(2744))//530
  console.log(digitDistanceNumber(330))//3
  console.log(digitDistanceNumber(333))//0
  console.log(digitDistanceNumber(19))//8