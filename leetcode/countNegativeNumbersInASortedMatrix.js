// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

const countNegatives = (arr) =>{
    let count = 0
    for(let i=arr.length-1;i>=0;i--){
        for(let j=arr[i].length-1;j>=0;j--){
            if(arr[i][j] < 0){
                count++
            }else{
                break
            }
        }
    }
    return count
}

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))//8
console.log(countNegatives([[3,2],[1,0]]))//0
console.log(countNegatives([[1,-1],[-1,-1]]))//3