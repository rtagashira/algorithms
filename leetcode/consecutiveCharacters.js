// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

const maxPower = (s) =>{
    let match = s.match(/(.)\1*/g)
    return Math.max(...match.map(x=>x.length))
}

console.log(maxPower('leetcode'))//2
console.log(maxPower("abbcccddddeeeeedcba"))//5