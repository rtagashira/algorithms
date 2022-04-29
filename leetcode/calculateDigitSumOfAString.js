// You are given a string s consisting of digits and an integer k.

// A round can be completed if the length of s is greater than k. In one round, do the following:

// Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
// Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
// Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
// Return s after all rounds have been completed.

const digitSum = (s, k) =>{
    while(s.length > k){
        let arr = []
        let count = 0
        let sum = 0
        for(let i=0;i<s.length;i++){
            count++
            sum += +s[i]
            if(count === k || i === s.length - 1){
                arr.push(sum.toString())
                count = 0
                sum = 0
            }
            if(i === s.length - 1){
                let str = ''
                for(let a of arr){
                    str += a
                }
                s = str
            }
        }
    }
    return s
}

console.log(digitSum(s = "11111222223", k = 3))//'135'