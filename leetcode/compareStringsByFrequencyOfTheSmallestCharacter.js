// Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

// Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

const numSmallerByFrequency = (queries, words) =>{
    const arr = []
    const count = (s) =>{
        let l,
            code
        for(let i=0;i<s.length;i++){
            if(code === undefined){
                code = s[i].charCodeAt()
                l = s[i]
            }else{
                if(s[i].charCodeAt() < code){
                    code = s[i].charCodeAt()
                    l = s[i]
                }
            }
        }
        return [...s].filter(x=>x===l).length
    }

    for(let q of queries){
        let c = 0
        for(let word of words){
            if(count(word) > count(q)) c++
        }
        arr.push(c)
    }
    return arr
}

console.log(numSmallerByFrequency(["cbd"],["zaaaz"]))//[1]
console.log(numSmallerByFrequency(["bbb","cc"],["a","aa","aaa","aaaa"]))//[1,2]