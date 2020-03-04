// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

const containsDuplicate = (nums) =>{
    const obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            return true
        }else{
            obj[nums[i]] = true
        }
    }
    return false
}

// const containsDuplicate = (nums) => nums.some(x=>nums.filter(y=>y===x).length > 1)

console.log(containsDuplicate([1,2,3,1]))//true
console.log(containsDuplicate([1,2,3,4]))//false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))//true