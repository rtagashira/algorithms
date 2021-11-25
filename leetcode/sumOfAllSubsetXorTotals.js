// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums. 

// Note: Subsets with the same elements should be counted multiple times.

// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

const subsetXORSum = (nums) =>{
    let loop = 2 ** nums.length - 1
    let total = 0
    
    while(loop){
        let str = loop.toString(2)
        str = '0'.repeat(nums.length - str.length) + str
        let first = true
        let subtotal = 0
        for(let i=0;i<nums.length;i++){
            if(str[i] === '1'){
                if(first){
                    subtotal = nums[i]
                    first = false
                }else{
                    subtotal = subtotal ^ nums[i]
                }
            }
        }
        total += subtotal
        loop--
    }
    return total
}

console.log(subsetXORSum([1,3]))//6
console.log(subsetXORSum([5,1,6]))//28