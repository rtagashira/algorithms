// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

const checkString = (s) =>{
    let b = false
    for(let l of s){
        if(b && l === 'a'){
            return false
        }else{
            if(l === 'b') b = true
        }
    }
    return true
}