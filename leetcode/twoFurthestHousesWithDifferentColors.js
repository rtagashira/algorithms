// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

const maxDistance = (colors) =>{
    let length = colors.length - 1
    
    while(length > 0){
        for(let i=0;i<colors.length - length;i++){
            if(colors[i] !== colors[i+length]) return length
        }
        length--
    }
}

console.log(maxDistance([1,1,1,6,1,1,1]))//3
console.log(maxDistance([1,8,3,8,3]))//4
console.log(maxDistance([0,1]))//1