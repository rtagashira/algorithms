// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

const checkOnesSegment = (s) =>{
    let one = false
    let zero = false
    for(let i=0;i<s.length;i++){
        if(one && zero){
            if(s[i] === '1') return false
        }else if(s[i] === '1'){
            one = true
        }else if(s[i] === '0'){
            zero = true
        }
    }
    return one
}

console.log(checkOnesSegment("1001"))//false
console.log(checkOnesSegment("110"))//true