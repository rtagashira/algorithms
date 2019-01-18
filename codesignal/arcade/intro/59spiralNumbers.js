// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, 
// starting from top-left and in clockwise direction.

function spiralNumbers(n) {
  let arr = []
  for(let i=0;i<n;i++){
    let str = '0'.repeat(n).split('')
    arr.push(str)

  }
  let count = 1
  let topRow = 0
  let botRow = n-1
  let rightCol = n-1
  let leftCol = 0

  while(count<=n*n){
      for(let j=leftCol;j<=rightCol;j++){
          arr[topRow][j]=count
          count ++  
      }
    topRow++
      for(let i=topRow;i<=botRow;i++){
          arr[i][rightCol] = count
          count++
      }
    rightCol--
      for(let j=rightCol;j>=leftCol;j--){
        arr[botRow][j] = count
        count++
      }
    botRow--
      for(let i=botRow;i>=topRow;i--){
        arr[i][leftCol] = count
        count++
      }
    leftCol++
  }
  return arr
}

// console.log(spiralNumbers(3))//[[1, 2, 3], [8, 9, 4], [7, 6, 5]]
console.log(spiralNumbers(5))
//   [[1,2,3,4,5], 
//  [16,17,18,19,6], 
//  [15,24,25,20,7], 
//  [14,23,22,21,8], 
//  [13,12,11,10,9]]

console.log(spiralNumbers(6))
// [[1,2,3,4,5,6], 
//  [20,21,22,23,24,7], 
//  [19,32,33,34,25,8], 
//  [18,31,36,35,26,9], 
//  [17,30,29,28,27,10], 
//  [16,15,14,13,12,11]]


//----------------------------------------------------------------------------------------------
function spiralNumbers2(n) {
  dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  curDir = 0
  curPos = [0, 0]
  res = [...new Array(n).keys()].map(x=>[...new Array(n).keys()].map(x=>0))
  for (i = 1; i < n * n + 1; i++) {
      res[curPos[0]][curPos[1]] = i
      nextPos = [curPos[0] + dirs[curDir][0], curPos[1] + dirs[curDir][1]]
      if (!(0 <= nextPos[0] && nextPos[0] < n && 
            0 <= nextPos[1] && nextPos[1] < n && 
            res[nextPos[0]][nextPos[1]] == 0)) {
          curDir = (curDir + 1) % 4
          nextPos = [curPos[0] + dirs[curDir][0], curPos[1] + dirs[curDir][1]]}
      curPos = nextPos}
  return res}

function spiralNumbers3(n) {
    var matrix = [...Array(n)].map(_ => []),
        x = 0,
        y = 0,
        dir = 2,
        size = n,
        c = 0;
    for (var i = 1; i <= n * n; i++) {
        matrix[y][x] = i;
        if (++c == size) {
            dir = (dir + 1) % 4;
            size -= dir % 2;
            c = 0;
        }
        if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
        else y += dir > 1 ? 1 : -1;
    }
    return matrix;
}