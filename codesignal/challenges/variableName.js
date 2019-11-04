// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

let variableName = (n) => !/[^a-zA-Z0-9_]/.test(n) && /^\D/.test(n)

console.log(variableName("var_1__Int"))//true
console.log(variableName("qq-q"))//false
console.log(variableName("2w2"))//false
console.log(variableName(" variable"))//false
console.log(variableName("va[riable0"))//false
console.log(variableName("variable0"))//true