// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

const maxLengthBetweenEqualCharacters = (s) =>{
    let set = new Set()
    let answer = -1
    for(let l of s){
        if(!set.has(l)){
            set.add(l)
            let i = s.indexOf(l)
            if(s.length - i - 1 <= answer) return answer
            let li = s.lastIndexOf(l)
            let n = li-i-1
            if(n > answer) answer = n            
        }
    }
    return answer
}

console.log(maxLengthBetweenEqualCharacters('aa'))//0
console.log(maxLengthBetweenEqualCharacters('abca'))//2
console.log(maxLengthBetweenEqualCharacters("cbzxy"))//-1
console.log(maxLengthBetweenEqualCharacters("cabbac"))//4