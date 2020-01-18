// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) =>{
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i],
               n = nums[i]
        if(obj[diff]){
            for(let j=0;j<obj[diff].length;j++){
                let secondI = obj[diff][j]
                if(secondI != i){   
                    return [secondI, i]
                }
            }
        }
        obj[n]? obj[n].push(i) : obj[n] = [i]
    }
}

// const twoSum = (nums, target) =>{
//     for(let i in nums){
//         let diff = target - nums[i],
//             diffI = nums.indexOf(diff)
//         if(diffI > -1 && diffI != i) return [i, diffI]
//     }
// }

console.log(twoSum([2, 7, 11, 15], 9))// [0, 1]