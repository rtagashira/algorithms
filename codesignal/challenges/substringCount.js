// Given a string of length <= 100000 consisting of English lowercase letters, count the number of substrings with no two equal letters.

let SubstringCount = (str) => {
  let count = 0
  for(let i in str){
    count++
    let s = new Set([str[i]])
    let j = +i + 1
    while(!s.has(str[j]) && j < str.length){
      count++
      s.add(str[j])
      j++
    }
  }
  return count
}

console.log(SubstringCount("challenge"))//23
console.log(SubstringCount("ylsoyimthyygkrucftrk"))//92
console.log(SubstringCount("ldcuvyomlnxebvopqvno"))//136