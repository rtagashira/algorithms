// Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

const isLongPressedName = (name, typed) =>{
    if(name === typed) return true
    let i = 0,
        j = 0,
        last
    if(name[0] !== typed[0]) return false
    while(i < typed.length){
        if(typed[i] === name[j]){
            i++
            j++
            last = undefined
        }else{
            if(last === undefined){
                last = typed[i]
            }else{
                if(last !== typed[i]) return false
            }
            i++
        }
    }
    return j === name.length
}

console.log(isLongPressedName("alex", "aaleex"))//true
console.log(isLongPressedName("saeed", "ssaaedd"))//false
console.log(isLongPressedName("alex","alexxr"))//false