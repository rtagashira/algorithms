// Given a rectangular matrix, return all of the elements of the matrix in spiral order.

const matrixElementsInSpiralOrder = (arr) =>{
    if(arr.length === 0) return []
    let count = arr.length * arr[0].length,
    z = 1,
    tRow = 0,
    bRow = arr.length - 1,
    lCol = 0,
    rCol = arr[0].length - 1,
    result = []
    while(z<=count){
        for(let i=lCol;i<=rCol;i++){
            result.push(arr[tRow][i])
            z++
        }
        tRow++
        if(z>count)break
        for(let i=tRow;i<=bRow;i++){
            result.push(arr[i][rCol])
            z++
        }
        rCol--
        if(z>count)break
        for(let i=rCol;i>=lCol;i--){
            result.push(arr[bRow][i])
            z++
        }
        bRow--
        if(z>count)break
        for(let i=bRow;i>=tRow;i--){
            result.push(arr[i][lCol])
            z++
        }
        lCol++
    }
    return result
}

console.log(matrixElementsInSpiralOrder([
    [ 1, 2, 3 ],
    [ 8, 9, 4 ],
    [ 7, 6, 5 ]
   ]))//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(matrixElementsInSpiralOrder([
    [33,29,-15,-20,-41,-1,34,20,-41, 44], 
    [14,-11,-27,-35,29,-14,34,-41,49,19], 
    [-12,-44,44,-43,-13,-6,40,-24,-6,8], 
    [-40,  4,27,  2,  2,15,38, 4,-13,15], 
    [-42,3,5,10,15,34,-18,-22,9,38]]))
//[33, 29, -15, -20, -41, -1, 34, 20, -41, 44, 19, 8, 15, 38, 9, -22, -18, 34, 15, 10,
// 5, 3, -42, -40, -12, 14, -11, -27, -35, 29, -14, 34, -41, 49, -6, -13, 4, 38, 15, 
// 2, 2, 27, 4, -44, 44, -43, -13, -6, 40, -24]