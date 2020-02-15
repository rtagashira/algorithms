// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

const generateMatrix = (n) =>{
    let total = n ** 2,
        count = 1,
        arr   = new Array(n)
        for(let i=0;i<n;i++){
            arr[i] = new Array(n)
        }
    let rowT = 0,
        rowB = arr.length - 1,
        colL = 0,
        colR = arr[0].length - 1,
        curR = 0,
        curC = 0

    while(count <= total){
        for(let i=colL;i<=colR;i++){
            arr[curR][curC] = count
            curC++
            count++
        }
        rowT++
        curR++
        curC = colR 
        
        for(let i=rowT;i<=rowB;i++){
            arr[curR][curC] = count
            curR++ 
            count++
        }
        colR--
        curC = colR
        curR = rowB
        for(let i=colR;i>=colL;i--){
            arr[curR][curC] = count
            curC--
            count++
        }
        rowB--
        curR = rowB
        curC = colL
        for(let i=rowB;i>=rowT;i--){
            arr[curR][curC] = count
            curR--
            count++
        }
        colL++
        curC = colL 
        curR = rowT 

    }
    return arr
}

console.log(generateMatrix(3))
//    [
//     [ 1, 2, 3 ],
//     [ 8, 9, 4 ],
//     [ 7, 6, 5 ]
//    ]