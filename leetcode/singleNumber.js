// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

const singleNumber = (nums) =>{
    let x = nums[0]
    for(let i=1;i<nums.length;i++){
        x = x ^ nums[i]
    }
    return x
}

// const singleNumber = (nums) =>{
//     let set = new Set()
//     for(let i=0;i<nums.length;i++){
//         if(set.has(nums[i])){
//             set.delete(nums[i])
//         }else{
//             set.add(nums[i])
//         }
//     }
//     return [...set].pop()
// }

console.log(singleNumber([2,2,1]))//1
console.log(singleNumber([4,1,2,1,2]))//4