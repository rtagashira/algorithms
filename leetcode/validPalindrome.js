// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

const isPalindrome = (s) =>{
    if(s === '') return true
    s = s.toLowerCase()
    let l = s.match(/[a-z0-9]/g)
    if(l === null) return true
    return  l.join('') === l.reverse().join('')
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))//true
console.log(isPalindrome("race a car"))//false
console.log(isPalindrome(" "))//true
console.log(isPalindrome("ab_a"))//true
console.log(isPalindrome("0P"))//false