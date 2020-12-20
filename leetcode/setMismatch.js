// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

const findErrorNums = (nums) =>{
    let repeat // the repeated int
    let obj = {} // counting to find the repeat int
    let arr = [] // ints from 1 to nums.length
    
    for(let i=0;i<=nums.length;i++){
        if(i>0)arr.push(i)
        if(i<nums.length){
            obj[nums[i]]? obj[nums[i]]++ : obj[nums[i]] = 1
            if(obj[nums[i]] === 2) repeat = nums[i]
        }
    }
    
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]) return [repeat, arr[i]]
    }
}

console.log(findErrorNums([1,2,2,4]))//[2,3]
console.log(findErrorNums([2,2]))//[2,1]