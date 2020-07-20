// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = (nums, n) =>{
    let left = nums.slice(0,n),
        right = nums.slice(n),
        arr = []
    while(left.length > 0){
        arr.push(left.shift())
        arr.push(right.shift())
    }
    return arr
}

console.log(shuffle([2,5,1,3,4,7],3))//[2,3,5,4,1,7] 
console.log(shuffle([1,2,3,4,4,3,2,1],4))//[1,4,2,3,3,2,4,1]
console.log(shuffle([1,1,2,2],2))//[1,2,1,2]