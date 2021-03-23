// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

const balancedStringSplit = (s) =>{
    let l = 0
    let r = 0
    let count = 0
    for(let char of s){
        if(char === 'R'){
            r++
        }else{
            l++
        }
        
        if(l === r){
            count++
            l = 0
            r = 0
        }
    }
    return count
}