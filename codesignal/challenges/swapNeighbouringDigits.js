// Given an integer n consisting of an even number of digits, swap pairs of adjacent digits in it, i.e. swap the first digit with the second one, the third digit with the fourth one, etc.

function swapNeighbouringDigits(n) {
  let temp
  let arr = [...n.toString()]
  for(let i=0;i<arr.length;i++){
      if(i % 2 === 0){
          temp = arr[i]
          arr[i] = arr[i+1]
      }else{
          arr[i] = temp
      }
  }
  return +arr.join('')
}

console.log(swapNeighbouringDigits(1234))//2143