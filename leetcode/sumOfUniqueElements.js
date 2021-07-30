// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

const sumOfUnique = (nums) =>{
    let sum = 0
    let obj = {}
    for(let n of nums){
        if(obj[n] === undefined){
            sum += n
            obj[n] = 1
        }else if(obj[n] === 1){
            sum -= n
            obj[n]--
        }
    }

    return sum
}

console.log(sumOfUnique([1,2,3,2]))//4
console.log(sumOfUnique([1,1,1,1,1]))//0
console.log(sumOfUnique([1,2,3,4,5]))//15