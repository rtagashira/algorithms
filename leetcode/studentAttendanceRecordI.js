// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

const checkRecord = (s) =>{
    let a = 0
    for(let i=0;i<s.length;i++){
        let d = s[i]
        if(d === 'A'){
            a++
            if(a > 1) return false
        }
        if(d === 'L' && s[i-1] === "L" && s[i-2] === 'L') return false
    }
    return true
}

console.log(checkRecord("PPALLP"))//true
console.log(checkRecord("PPALLL"))//false