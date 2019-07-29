// Given an initial string, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

function caseUnification(str) {
  const lower = str.match(/[a-z]/g) || 0,
        upper = str.match(/[A-Z]/g) || 0
  return (lower.length || 0) > (upper.length || 0)? str.toLowerCase(): str.toUpperCase()
}

console.log(caseUnification("Aba"))//'aba'
console.log(caseUnification("ABa"))//'ABA'
console.log(caseUnification("ZZZZZ"))//"ZZZZZ"