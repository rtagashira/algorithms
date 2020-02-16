// Given a pattern string and a test string, your task is to implement regex substring matching. If pattern is preceded by a ^, the pattern, excluding the ^, will be matched with the starting position of the test string. If pattern is followed by a $, the pattern, excluding the $, will be matched with the ending position of the test string. If no such markers are present, check whether pattern is a substring of test, regardless of its position.

const regexMatching = (pattern, test) =>{
    let reg = new RegExp(pattern)
    return reg.test(test)
}

// const regexMatching = (pattern, test) =>{
//     if(pattern[0] === '^'){
//         return test.indexOf(pattern.slice(1)) === 0
//     }else if(pattern[pattern.length-1] === '$'){
//         return test.indexOf(pattern.slice(0,-1)) === test.length - pattern.length + 1
//     }else{
//         return test.indexOf(pattern) > -1
//     }
// }

console.log(regexMatching("^code","codesignal"))//true
console.log(regexMatching("nal$","codesignal"))//true