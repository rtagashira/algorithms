// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

const luckyNumbers  = (matrix) =>{
    let objRow = {}
    let objCol = {}
    let arr = []
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(objRow[i] != undefined){
                if(matrix[i][j] < objRow[i]){
                    objRow[i] = matrix[i][j]
                }
            }else{
                objRow[i] = matrix[i][j]
            }
            
            if(objCol[j] != undefined){
                if(matrix[i][j] > objCol[j]){
                    objCol[j] = matrix[i][j]
                }
            }else{
                objCol[j] = matrix[i][j]
            }
        }
    }
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === objRow[i] && matrix[i][j] === objCol[j]) arr.push(matrix[i][j])
        }
    }
    return arr
}

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))//15