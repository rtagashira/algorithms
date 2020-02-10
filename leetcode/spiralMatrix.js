// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

const spiralOrder = (matrix) =>{
    if(matrix.length === 0) return []
    let rowT = 0,
        rowB = matrix.length - 1,
        colL = 0,
        colR = matrix[0].length - 1,
        arr = [],
        total = matrix.length * matrix[0].length,
        count = 0
    
    while(count < total){
        for(let i=colL;i<=colR;i++){
            arr.push(matrix[rowT][i])
            count++
        }
        rowT++

        if(count < total){
            for(let i=rowT;i<=rowB;i++){
                arr.push(matrix[i][colR])
                count++
            }
        }
        colR--

        if(count < total){
            for(let i=colR;i>=colL;i--){
                arr.push(matrix[rowB][i])
                count++
            }
        }
        rowB--

        if(count < total){
            for(let i=rowB;i>=rowT;i--){
                arr.push(matrix[i][colL])
                count++
            }
        }
        colL++
    }
    return arr
}

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]))//[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]]))//[1,2,3,4,8,12,11,10,9,5,6,7]