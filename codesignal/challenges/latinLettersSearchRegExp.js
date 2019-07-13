// Determine if the given string contains at least one English letter.

function latinLettersSearchRegExp(str) {
  return /[a-zA-Z]/.test(str)
}

console.log(latinLettersSearchRegExp("a_ _2"))//true
console.log(latinLettersSearchRegExp("W2"))//true
console.log(latinLettersSearchRegExp("_1111 "))//false
console.log(latinLettersSearchRegExp("........"))//false