// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

const plusOne = (digits) =>{
    for(let i=digits.length-1;i>=0;i--){
        let temp = i===digits.length - 1? digits[i] + 1: digits[i]
        if(temp > 9){
            let str = temp.toString(),
                ones = +str[1],
                tens = +str[0]
            digits[i] = ones
            if(i > 0){
                digits[i-1] += tens
            }else{
                return [tens,...digits]
            }
        }else{
            digits[i] = temp
        }
    }
    return digits
}

console.log(plusOne([1,2,3]))//[1,2,4]