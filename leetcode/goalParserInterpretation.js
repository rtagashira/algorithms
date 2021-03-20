// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

const interpret = (command) =>{
    let str = ''
    let i = 0
    let j = 1
    while(j <= command.length){
        let temp = command.slice(i,j)
        if(temp === 'G'){
            str += 'G'
            i = j
            j = i + 1
        }else if(temp === '()'){
            str += 'o'
            i = j
            j = i + 1
        }else if(temp === '(al)'){
            str += 'al'
            i = j
            j = i + 1
        }else{
            j++
        }
    }
    return str
}

// const interpret = (command) =>{
//     let str = ''
//     let temp = ''
//     for(let s of command){
//         temp += s
//         if(temp === 'G'){
//             str += 'G'
//             temp = ''
//         }else if(temp === '()'){
//             str += 'o'
//             temp = ''
//         }else if(temp === '(al)'){
//             str += 'al'
//             temp = ''
//         }
//     }
//     return str
// }

console.log(interpret("G()(al)"))// 'Goal'