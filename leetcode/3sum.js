// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = (nums) =>{
    let arr = []
    if(nums.length >= 3){
        nums.sort((a,b)=>a-b)
        
        for(let i=0;i<nums.length;i++){
            if(i>0 && nums[i] === nums[i-1]) continue
            let l = i+1
            let r = nums.length-1
            while(l<r){
                let sum = nums[i] + nums[l] + nums[r]
                if(sum > 0){
                    r--
                }else if(sum < 0){
                    l++
                }else{
                    arr.push([nums[i],nums[l],nums[r]])
                    l++
                    while(nums[l] === nums[l-1] && l < r){
                        l++
                    }
                }
            }
        }
    }

    return arr
}

console.log(threeSum([-1,0,1,2,-1,-4]))//[[-1,-1,2],[-1,0,1]]
console.log(threeSum([]))//[]
console.log(threeSum([0]))//[]