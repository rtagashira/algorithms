// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

const threeSumClosest = (nums, target) =>{
    nums.sort((a,b)=>a-b)
    let sum
    let dif

    for(let i=0;i<nums.length-2;i++){
        let l = i + 1
        let r = nums.length-1
        while(l < r){
            let s = nums[i] + nums[l] + nums[r]
            let d = Math.abs(target - s)
            if(dif === undefined || d < dif){
                dif = d
                sum = s
            }else if(s === target){
                return s
            }
            if(s > target){
                r--
            }else{
                l++
            }
        }
    }    
    return sum
}

// const threeSumClosest = (nums, target) =>{
//     let sum,dif
    
//     for(let i=0;i<nums.length-2;i++){
//         for(let j=i+1;j<nums.length-1;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 let s = nums[i] + nums[j] + nums[k]
//                 let d = Math.abs(target - s)
//                 if(dif === undefined || d <= dif){
//                     sum = s
//                     dif = d
//                 }
//             }
//         }
//     }
//     return sum
// }

console.log(threeSumClosest(nums = [-1,2,1,-4], target = 1))//2
console.log(threeSumClosest(nums = [0,0,0], target = 1))//0
console.log(threeSumClosest([1,1,-1,-1,3],-1))//-1
console.log(threeSumClosest([0,2,1,-3],1))//0
console.log(threeSumClosest([1,2,4,8,16,32,64,128],82))//82