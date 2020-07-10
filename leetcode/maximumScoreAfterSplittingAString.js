// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

const maxScore = (s) =>{
    let score = 0
    for(let i=1;i<s.length;i++){
        let l = s.slice(0,i),
            r = s.slice(i),
            zeroSum = [...l].reduce((acc,v)=>v==='0'?acc+1:acc ,0),
            oneSum = [...r].reduce((acc,v)=>v==='1'?acc+1:acc,0)
            if(zeroSum + oneSum > score) score = zeroSum + oneSum
    }
    return score
}

console.log(maxScore("011101"))//5
console.log(maxScore("00111"))//5
console.log(maxScore("1111"))//3
console.log(maxScore("00"))//1