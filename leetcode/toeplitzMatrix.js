// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

const isToeplitzMatrix = (arr) =>{
    let i = arr.length - 1
    // testing diagonals from bottom left to top left corner
    // ^ 3 x x x
    // | 2 3 x x
    // | 1 2 3 x
    while(i >= 0){
        let set = new Set()
        let j = i,
            k = 0
        while(j < arr.length && k < arr[0].length){
            set.add(arr[j][k])
            j++
            k++
        }
        if(set.size > 1) return false
        i--
    }
    // testing diagonals starting from 2nd from the top left to the top right
    let j = 1
    while(j < arr[0].length){
        let set = new Set(),
            r = 0,
            c = j
        while(r < arr.length && c < arr[0].length){
            set.add(arr[r][c])
            r++
            c++
        }
        if(set.size > 1) return false
        j++
    }
    return true
}

console.log(isToeplitzMatrix([
    [1,2,3,4],
    [5,1,2,3],
    [9,5,1,2]
  ]))//true
console.log(isToeplitzMatrix([
    [1,2],
    [2,2]
  ]))//false