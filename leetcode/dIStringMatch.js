// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

const diStringMatch = (s) =>{
    let l = 0
    let r = s.length
    let arr = []
    for(let char of s){
        if(char === 'I'){
            arr.push(l)
            l++
        }else{
            arr.push(r)
            r--
        }
    }
    arr.push(l)
    return arr
}

console.log(diStringMatch("IDID"))//[0,4,1,3,2]