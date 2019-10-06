// Given integers n and k, find the number of strictly increasing sequences of length n consisting of positive integers not exceeding k

let countIncreasingSequences = (n, k) => {
  // the subsets problem only using subsets of length n
  let loops   = 2 ** k - 1,
      numbers = '',
      count   = 0

  for(let i=1;i<=k;i++){
    numbers += i
  }

  while(loops){
    let str = loops.toString(2)
        str = '0'.repeat(k - str.length) + str

    let temp = ''
    for(let i in str){
      if(str[i] === '1') temp += numbers[i]
    }
    if(temp.length === n) count++
    loops --
  }
  return count
}

console.log(countIncreasingSequences(2,3))//3
console.log(countIncreasingSequences(1,4))//4