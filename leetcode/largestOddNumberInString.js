// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

const largestOddNumber = (num) =>{
    for(let i=num.length-1;i>=0;i--){
        if(num[i] % 2 != 0) return num.slice(0,i+1)
    }
    return ''
}

console.log(largestOddNumber("52"))//'5'
console.log(largestOddNumber("4206"))//''
console.log(largestOddNumber("35427"))//"35427"