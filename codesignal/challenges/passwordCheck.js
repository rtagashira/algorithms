// A password is complex enough, if it meets all of the following conditions:

// its length is at least 5 characters;
// it contains at least one capital letter;
// it contains at least one small letter;
// it contains at least one digit.
// Determine whether a given password is complex enough.


let passwordCheck = (str) => /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(str) && str.length >= 5

// let passwordCheck = (str) => str.length >= 5 && /[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str)

console.log(passwordCheck("my.Password123"))//true
console.log(passwordCheck("my.password123"))//false
console.log(passwordCheck("aaAZ0"))//true
console.log(passwordCheck("AAAZ0"))//false
console.log(passwordCheck("fdhifeiUHDhfiue"))//false
console.log(passwordCheck("fdhifeiUHDhf1ue"))//true