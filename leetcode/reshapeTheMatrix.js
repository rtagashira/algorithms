// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

const matrixReshape = (nums, r, c) =>{
    if(r*c != nums.length* nums[0].length) return nums
    let arr = []
    for(let i=0;i<r;i++){
        arr.push([])
    }
    let row = 0
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[0].length;j++){
            if(arr[row].length < c){
                arr[row].push(nums[i][j])
                if(arr[row].length === c){
                    row++
                }
            }
        }
    }
    return arr
}

console.log(matrixReshape(nums = 
    [[1,2],
     [3,4]],
    r = 1, c = 4))//[[1,2,3,4]]
console.log(matrixReshape(nums = 
    [[1,2],
     [3,4]],
    r = 2, c = 4))//[[1,2],[3,4]]
console.log(matrixReshape([[1,2],[3,4]],4,1))//[[1],[2],[3],[4]]