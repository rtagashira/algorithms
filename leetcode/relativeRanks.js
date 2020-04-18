// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

const findRelativeRanks = (nums) =>{
    let dup = [...nums].sort((a,b)=>a-b)
    let obj = {}
    let l = nums.length
    for(let i=l-1;i>=0;i--){
        if(i === l - 1){
            obj[dup[i]] = 'Gold Medal'
        }else if(i === l - 2){
            obj[dup[i]] = 'Silver Medal'
        }else if(i === l - 3){
            obj[dup[i]] = 'Bronze Medal'
        }else{
            obj[dup[i]] = l - i + ''
        }
        
    }
    for(let i=0;i<l;i++){
        nums[i] = obj[nums[i]]
    }
    return nums
}

console.log(findRelativeRanks([10,3,8,9,4]))//["Gold Medal","5","Bronze Medal","Silver Medal","4"]