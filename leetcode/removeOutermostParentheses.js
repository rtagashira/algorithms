// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

const removeOuterParentheses = (s) =>{
    let lCount = 0
    let rCount = 0
    let set = new Set([0])
    let str = ''
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            lCount++
        }else{
            rCount++
            if(lCount === rCount){
                set.add(i)
                if(i != s.length - 1){
                    set.add(i+1)
                }
                lCount = 0
                rCount = 0
            }
        }
    }
    for(let i=0;i<s.length;i++){
        if(!set.has(i)){
            str += s[i]
        }
    }
    return str
}

console.log(removeOuterParentheses("(()())(())"))//"()()()"