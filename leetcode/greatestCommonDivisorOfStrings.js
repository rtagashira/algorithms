// For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

const gcdOfStrings = (str1, str2) =>{
    let str = ''
    
    for(let i=1;i<=Math.min(str1.length,str2.length);i++){
        let s1Bool = false
        let s2Bool = false
        let s1Slice = str1.slice(0,i)
        let s2Slice = str2.slice(0,i)
        if(s1Slice === s2Slice){
            let temp1 = s1Slice
            let temp2 = s2Slice
            if(str1.length % temp1.length === 0){
                while(temp1.length < str1.length){
                    temp1 += s1Slice 
                }
                if(temp1 === str1) s1Bool = true
            }
            if(str2.length % temp2.length === 0){
                while(temp2.length < str2.length){
                    temp2 += s2Slice 
                }
                if(temp2 === str2) s2Bool = true
            }
        }
        if(s1Bool && s2Bool) str = s1Slice
    }

    return str
}

console.log(gcdOfStrings("ABABAB","ABAB"))//'AB'
console.log(gcdOfStrings("LEET","CODE"))//''