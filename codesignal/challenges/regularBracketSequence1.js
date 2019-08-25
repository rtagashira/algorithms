// For a string consisting of only '('s and ')'s, determine if it is a regular bracket sequence or not.

// A bracket sequence is called regular if it is possible to insert some numbers and signs into the sequence in such a way that the new sequence will represent a correct arithmetic expression.

function regularBracketSequence1(str) {
  if(str.length % 2 != 0 || str[0] != '(' || str[str.length -1] != ')')return false
  let l = 0
  let r = 0
  for(let char of str){
    char === '('? l++: r++
  }
  return l === r
}

console.log(regularBracketSequence1("()()"))//true
console.log(regularBracketSequence1("((())"))//false
console.log(regularBracketSequence1("(())()()()"))//true
console.log(regularBracketSequence1(")))((("))//false
console.log(regularBracketSequence1("))())"))//false
console.log(regularBracketSequence1("(())()(())"))//true
console.log(regularBracketSequence1("())()))"))//false
console.log(regularBracketSequence1(")))())))("))//false
console.log(regularBracketSequence1("())(("))//false
console.log(regularBracketSequence1("(((())))()"))//true