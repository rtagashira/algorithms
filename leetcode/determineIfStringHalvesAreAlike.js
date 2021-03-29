// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

const halvesAreAlike = (s) =>{
    let a = s.slice(0,s.length/2)
    let b = s.slice(s.length/2)
    let arr = a.match(/[aeiou]/gi) || 0
    let arr2 = b.match(/[aeiou]/gi) || 0
    return arr.length === arr2.length
}

console.log(halvesAreAlike("book"))//true
console.log(halvesAreAlike("textbook"))//false