// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding2(str, target) {
   return target === str.slice(-target.length)
}

function confirmEnding(str, target) {
   return str.endsWith(target)
}

console.log(confirmEnding("Bastian", "n"))