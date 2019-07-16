// Call two integers a and b similar if divisor divides both a and b or if it doesn't divide either.

// Given integers a, b and divisor, check if a and b are similar.

function areSimilarNumbers(a, b, d) {
    return (a % d === 0 && b % d === 0) || (a % d != 0 && b % d != 0)
}
function areSimilarNumbers(a, b, d) {
    return a % d === b % d || a % d !=0 && b % d != 0
}

console.log(areSimilarNumbers(10,12,2))//true
console.log(areSimilarNumbers(10,12,3))//false
console.log(areSimilarNumbers(54,27,6))//false
console.log(areSimilarNumbers(78,39,10))//true