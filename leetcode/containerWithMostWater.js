// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

const maxArea = (arr) =>{
    let area = 0,
        i    = 0,
        j    = arr.length - 1
    while(i !== j){
        let left  = arr[i],
            right = arr[j],
            temp  = (j-i) * Math.min(left, right)
        if(temp > area) area = temp
        left <= right? i++ : j--
    }
    return area
}

// const maxArea = (arr) =>{
//     let area = 0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let temp = (j-i) * Math.min(arr[i],arr[j])
//             if(temp > area) area = temp
//         }
//     }
//     return area
// }

console.log(maxArea([1,8,6,2,5,4,8,3,7]))//49