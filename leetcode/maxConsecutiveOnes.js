// Given a binary array, find the maximum number of consecutive 1s in this array.

const findMaxConsecutiveOnes = (nums) =>{
    let consec = false,
        max    = 0,
        temp   = 0
    for(let n of nums){
        if(consec){
            if(n === 1){
                temp++
                if(temp > max) max = temp
            }else{
                consec = false
                temp = 0
            }
        }else{
            if(n === 1){
                consec = true
                temp++
                if(temp > max) max = temp
            }
        }
    }
    return max
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))//3