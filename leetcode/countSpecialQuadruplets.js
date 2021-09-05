// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

const countQuadruplets = (arr) =>{
    let count = 0
    
    for(let i=0;i<arr.length-3;i++){
        for(let j=i+1;j<arr.length-2;j++){
            for(let k=j+1;k<arr.length-1;k++){
                let sum = arr[i] + arr[j] + arr[k]
                for(let l=k+1;l<arr.length;l++){
                    if(arr[l] === sum) count++
                }
            }
        }
    }
    return count
}

console.log(countQuadruplets([9,6,8,23,39,23]))//2
console.log(countQuadruplets([28,8,49,85,37,90,20,8]))//1