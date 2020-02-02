// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

const searchRange = (nums, target) =>{
    let left = 0,
        right = nums.length>0? nums.length - 1:0,
        mid = Math.floor(left + right/2)
        
    while(nums[left] !== target || nums[right] !== target){
        if(right === left && nums[left] !== target) return [-1,-1]
          
        if(nums[mid] === target){
            while(nums[mid] === target){
                left = mid
                if(nums[mid - 1] === target ){
                    mid--
                }else{
                    break
                }
            }
            while(nums[mid] === target){
                right = mid
                if(nums[mid + 1] === target){
                    mid++
                }else{
                    break
                }
            }
        }else{
            if(target < nums[mid]){
                if(mid-1 >= left) right = mid - 1
                if(mid === left) right = left
                mid = Math.floor((right + left)/2)
            }else{
                if(mid+1 <= nums.length - 1) left = mid + 1
                mid = Math.floor((right + left)/2)
            }
        }
    }
    return [left,right]
}

console.log(searchRange([5,7,7,8,8,10], 8))//[3,4]
console.log(searchRange([5,7,7,8,8,10], 6))//[-1,-1]
console.log(searchRange([], 0))//[-1,-1]
console.log(searchRange([1], 1))//[0,0]
console.log(searchRange([2,2], 3))//[-1,-1]
console.log(searchRange([1,2,3], 1))//[0,0]
console.log(searchRange([2,2], 1))//[-1,-1]