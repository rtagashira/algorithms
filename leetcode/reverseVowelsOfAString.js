// Write a function that takes a string as input and reverse only the vowels of a string.

const reverseVowels = (s) =>{
    let arr = s.match(/[aeiou]/gi)
        str = ''
    for(let i=0;i<s.length;i++){
        if(/[aeiou]/i.test(s[i])){
           str += arr.pop()
        }else{
            str += s[i]
        }
    }
    return str
}

console.log(reverseVowels("hello"))//"holle"
console.log(reverseVowels("leetcode"))//"leotcede"
console.log(reverseVowels("aA"))//"Aa"