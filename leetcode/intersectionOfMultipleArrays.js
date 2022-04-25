// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

const intersection = (nums) =>{
    let set = new Set(nums[0])
    let set2 = new Set()
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<nums[i].length;j++){
            if(set.has(nums[i][j])){
                set2.add(nums[i][j])
            }
        }
        set = set2
        set2 = new Set()
    }
    return [...set].sort((a,b)=>a-b)
}

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))//[3,4]