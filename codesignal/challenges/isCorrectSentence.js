// A string is said to be a correct sentence if it starts with the capital letter and ends with a full stop (.).

// Given a string, check whether it represents a correct sentence.

function isCorrectSentence(str) {
  return str.match(/^[A-Z].*\.$/)? true: false
}

console.log(isCorrectSentence("This is a correct sentence."))//true
console.log(isCorrectSentence("this is an incorrect sentence."))//false
console.log(isCorrectSentence("This is another incorrect sentence"))//false