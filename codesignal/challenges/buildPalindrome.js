// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

function buildPalindrome(str) {
  let revStr = [...str].reverse().join('')
  let len = str.length
  while(true){
    if(str.slice(-len) === revStr.slice(0,len)){
      if(len === str.length){
        return str
      }
      return str + revStr.slice(-(str.length - len))
    }
    len --
  }
}

console.log(buildPalindrome("abcdc"))//"abcdcba"
console.log(buildPalindrome("ababab"))//"abababa"
console.log(buildPalindrome("abba"))//"abba"