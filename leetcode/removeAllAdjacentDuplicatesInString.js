// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

const removeDuplicates = (s) =>{
    while(/(.)\1/.test(s)){
        s = s.replace(s.match(/(.)\1/)[0], '')
    }
    return s
}

console.log(removeDuplicates("abbaca"))//"ca"