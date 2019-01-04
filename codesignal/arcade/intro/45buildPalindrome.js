// Given a string, find the shortest possible string which can be achieved by adding characters 
// to the end of initial string to make it a palindrome.


function buildPalindrome(str) {
  let reverse = str.split('').reverse().join('')
  for(let i=str.length;i>=0;i--){
    if(str.slice(-i)===reverse.slice(0,i)){
      return str + reverse.slice(i)
    }
  }
}

console.log(buildPalindrome("abcdc"))//"abcdcba"
console.log(buildPalindrome("ababab"))//"abababa"
console.log(buildPalindrome("abaa"))//"abaaba"
