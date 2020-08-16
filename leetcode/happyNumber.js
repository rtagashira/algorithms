// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

const isHappy = (n) =>{
    let set = new Set(),
        str = n.toString()
    while(str !== '1'){
        let temp = 0
        for(let n of str){
            temp += n ** 2
        }
        if(set.has(temp)) return false
        set.add(temp)
        str = temp.toString()
    }
    return true
}