// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

const secondHighest = (s) =>{
    let a,b
    
    for(let char of s){
        if(/[0-9]/.test(char)){
            if(a === undefined || +char > a){
                b = a
                a = +char
            }else if(+char < a){
                if(+char > b || b === undefined){
                    b = +char
                }
            }
        }
    }
    return b === undefined? -1 : b
}

console.log(secondHighest("dfa12321afd"))//2
console.log(secondHighest("abc1111"))//-1