// A query word matches a given pattern if we can insert lowercase letters to the pattern word so that it equals the query. (We may insert each character at any position, and may insert 0 characters.)

// Given a list of queries, and a pattern, return an answer list of booleans, where answer[i] is true if and only if queries[i] matches the pattern.

const camelMatch = (arr, pattern) =>{
    let a = []
    for(let word of arr){
        let i = 0
        let j = 0
        let t = true
        while(i < word.length){
            if(word[i] === pattern[j]){
                i++
                j++
            }else if(/[a-z]/.test(word[i])){
                i++
            }else{
                a.push(false)
                t = false
                break
            }
        }
        
        if(t){
            if(j < pattern.length){
                a.push(false)
            }else{
                a.push(true)
            }
        }
    }
    return a
}

console.log(camelMatch(queries = ["FooBar","FooBarTest",
    "FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"))//[true,false,true,true,false]
console.log(camelMatch(queries = ["FooBar","FooBarTest",
    "FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"))//[false,true,false,false,false]