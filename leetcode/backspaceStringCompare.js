// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.


const backspaceCompare = (s,t) =>{
    let newS = '',
        newT = ''
    for(let i=0;i<Math.max(s.length,t.length);i++){
        if(i<s.length){
            if(s[i] === '#'){
                newS = newS.slice(0,-1)
            }else{
                newS += s[i]
            }
        }
        
        if(i<t.length){
            if(t[i] === '#'){
                newT = newT.slice(0,-1)
            }else{
                newT += t[i]
            }
        }
    }
    return newS === newT
}

console.log(backspaceCompare("ab#c","ad#c"))//true
console.log(backspaceCompare("xywrrmp","xywrrmu#p"))//true