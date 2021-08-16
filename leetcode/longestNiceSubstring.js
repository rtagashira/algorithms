// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

const longestNiceSubstring = (s) =>{
    let sub = ''
    
    for(let i=0;i<s.length-1;i++){
        let r = i+1
        while(r<s.length){
            let slice = s.slice(i,r+1)
            let set = new Set([...slice])
            let bool = true
            for(let char of slice){
                if(/[a-z]/.test(char)){
                    if(!set.has(char.toUpperCase())){
                        bool = false
                        break
                    }
                }else{
                    if(!set.has(char.toLowerCase())){
                        bool = false
                        break
                    }
                }
            }
            if(bool && slice.length > sub.length) sub = slice
            r++
        }
    }
    
    return sub
}

console.log(longestNiceSubstring("YazaAay"))//'aAa'
console.log(longestNiceSubstring("Bb"))//"Bb"
console.log(longestNiceSubstring("c"))//""
console.log(longestNiceSubstring("dDzeE"))//"dD"