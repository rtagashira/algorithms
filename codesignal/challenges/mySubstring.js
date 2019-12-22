// Implement an algorithm that can output the substring of the given string within specified bounds.

let mySubstring = (str, l, r) => str.slice(l, r + 1)

console.log(mySubstring("abcde",2,3))//"cd"
console.log(mySubstring("abcdef",0,2))//"abc"