// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

const truncateSentence = (s, k) =>{
    let count = 0
    for(let i=0;i<s.length;i++){
        if(s[i] === ' '){
            count++
            if(count === k) return s.slice(0,i)
        }
    }
    return s
}

// const truncateSentence = (s, k) =>{
//     let arr = s.match(/\w+/g)
//     return arr.slice(0,k).join(' ')
// }

console.log(truncateSentence(s = "Hello how are you Contestant", k = 4))//"Hello how are you"
console.log(truncateSentence(s = "What is the solution to this problem", k = 4))
                                                                                //"What is the solution"