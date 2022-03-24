// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.

const countHillValley = (nums) =>{
    let count = 0
    let higher = false
    let hold = false
    for(let i=1;i<nums.length-1;i++){
        let left = nums[i-1]
        let right = nums[i+1]
        let num = nums[i]

        if(left > num && right > num ){
            count++
        }else if(left < num && right < num){
            count++
        }else if(hold){
            if(higher && right > num){
                count++
                hold = false
            }else if(!higher && right < num){
                count++
                hold = false
            }else if(right !== num){
                hold = false
            }
        }else if(right === num){
            if(left > num){
                hold = true
                higher = true
            }else if(left < num){
                hold = true
                higher = false
            }
        }
    }
    return count
}

console.log(countHillValley([49,16,11,24,82,24,73,61,62,44,25,59,3,57,62,7,38,61,22,92,90,60,28,21,37,54,
    43,14,3,64,48,51,55,55,58,43,67,46,36,32,78]))//23
console.log(countHillValley([21,21,21,2,2,2,2,21,21,45]))//1