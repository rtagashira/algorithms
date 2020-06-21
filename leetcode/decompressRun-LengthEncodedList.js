// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

const decompressRLElist = (nums) =>{
    let arr = []
    for(let i=0;i<nums.length;i+=2){
        let loop = nums[i]
        while(loop){
            arr.push(nums[i+1])
            loop--
        }
    }
    return arr
}

// const decompressRLElist = (nums) =>{
//     let arr = []
//     for(let i=0;i<nums.length;i+=2){
//         let temp = new Array(nums[i]).fill(nums[i+1])
//         arr = [...arr,...temp]
//     }
//     return arr
// }

console.log(decompressRLElist([1,2,3,4]))//[2,4,4,4]
console.log(decompressRLElist([1,1,2,3]))//[1,3,3]