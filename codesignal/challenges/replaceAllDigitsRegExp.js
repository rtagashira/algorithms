// Implement a function that replaces each digit in the given string with a '#' character.

let replaceAllDigitsRegExp = (str) => str.replace(/\d/g, '#')

console.log(replaceAllDigitsRegExp("There are 12 points"))//"There are ## points"
console.log(replaceAllDigitsRegExp("012ss210"))//"###ss###"