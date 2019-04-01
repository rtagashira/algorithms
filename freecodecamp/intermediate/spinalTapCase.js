// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.match(/[A-Z][a-z]+|[a-z]+/g)
            .join('-')
            .toLowerCase()
}


console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('The_Andy_Griffith_Show'))
console.log(spinalCase('Teletubbies say Eh-oh'))
console.log(spinalCase('AllThe-small Things'))

// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".