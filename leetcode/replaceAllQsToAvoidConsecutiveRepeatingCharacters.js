// Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

// Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

const modifyString = (s) =>{
    let arr = [...s]
    for(let i=0;i<s.length;i++){
        if(arr[i] === '?'){
            let code
            let a = []
            if(arr[i-1]){
                if(arr[i-1].charCodeAt() >= 97 && arr[i-1].charCodeAt() <= 122){
                    a.push(arr[i-1].charCodeAt())
                }
            }
            if(arr[i+1]){
                if(arr[i+1].charCodeAt() >=97 && arr[i+1].charCodeAt() <= 122){
                    a.push(arr[i+1].charCodeAt())
                }
            }
            code = Math.min(...a) + 1
            if(code === Math.max(...a)) code++
            if(code > 122) code = 97
            arr[i] = String.fromCharCode(code)
        }
    }
    return arr.join('')
}

console.log(modifyString("?zs"))//"azs"
console.log(modifyString("ubv?w"))//"ubvaw"
console.log(modifyString("j?qg??b"))//"jaqgacb"
console.log(modifyString("??yw?ipkj?"))//"acywaipkja"