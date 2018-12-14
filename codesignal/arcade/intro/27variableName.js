// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.

function variableName(str) {
  return !str.match(/^\d|[\W]/g)
}


console.log(variableName("var_1__Int"))//true
console.log(variableName("qq-q"))//false
console.log(variableName("2w2"))//false