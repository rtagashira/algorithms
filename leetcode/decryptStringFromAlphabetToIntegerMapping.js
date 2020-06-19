// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

const freqAlphabets = (s) =>{
    let str = ''
    for(let i=s.length-1;i>=0;i--){
        if(s[i] === '#'){
            let temp = s[i-2] + s[i-1]
            temp = +temp + 96
            str = String.fromCharCode(temp) + str
            i -= 2
        }else{
            str = String.fromCharCode(+s[i] + 96) + str
        }
    }
    return str
}

console.log(freqAlphabets("10#11#12"))//"jkab"
console.log(freqAlphabets("1326#"))//"acz"