// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

const isValid = (s) =>{
    let arr = [],
        obj = {
            '(':')',
            '[':']',
            '{':'}'
        }
    for(let i=0;i<s.length;i++){
        //if char is ([{ then unshift it into arr
        if(obj[s[i]]){
            arr.unshift(s[i])
        }else{
            //if it's not ([{ then it must be the paired value of the first element of the array
            if(s[i] !== obj[arr[0]]){
                return false
            }else{
                //if char is the paired value then remove it from the array
                arr.shift()
            }
        }
    }
    if(arr.length > 0) return false
    return true
};

console.log(isValid("()"))//true
console.log(isValid("()[]{}"))//true
console.log(isValid("(]"))//false
console.log(isValid("([)]"))//false
console.log(isValid("{[]}"))//true