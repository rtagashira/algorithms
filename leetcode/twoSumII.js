// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.

// Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

const twoSum = (numbers, target) =>{
    let l = 0
    let r = numbers.length - 1
    let sum = numbers[l] + numbers[r]
    while(sum !== target){
        sum < target? l++ : r--
        sum = numbers[l] + numbers[r]
    }
    return [l+1,r+1]
}

console.log(twoSum(numbers = [2,7,11,15], target = 9))//[1,2]
console.log(twoSum(numbers = [2,3,4], target = 6))//[1,3]
console.log(twoSum(numbers = [-1,0], target = -1))//[1,2]