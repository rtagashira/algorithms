// A sentence is considered correct if:

//     it starts with a capital letter;
//     it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
//     full stops, question marks and exclamation points don't appear anywhere else in the sentence.

// Given a sentence, return true if it is correct and false otherwise.

function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^.!?]*[.!?]$/;
  return re.test(sentence);
}

console.log(isSentenceCorrect("This is an example of *correct* sentence."))//true
console.log(isSentenceCorrect("!this sentence is TOTALLY incorrecT"))//false
console.log(isSentenceCorrect("Almost correct sentence"))//false
console.log(isSentenceCorrect("Something is !wrong! here."))//false