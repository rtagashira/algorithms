// You are given a string. Remove its first and last characters until the string is empty or the first and the last characters are not equal. Output the resulting string.

function reduceString(str) {
  let i = 0
  while(true){
    const s = i === 0? str : str.slice(i,-i)
    if(s[0] != s[s.length -1]) return s
    if(s.length === 0) return ''
    i++
  }
}

console.log(reduceString("abacaba"))//''
console.log(reduceString("12133221"))//'1332'