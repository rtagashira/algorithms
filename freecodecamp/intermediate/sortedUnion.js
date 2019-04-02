// Intermediate Algorithm Scripting: Sorted Union

// Write a function that takes two or more arrays and returns a new array of unique values 
// in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original 
// order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should 
// not be sorted in numerical order.

// Check the assertion tests for examples.


function uniteUnique(...arrs) {
    let s = new Set(arrs[0])
    for(let array of arrs.slice(1)){
        for(let num of array){
            s.add(num)
        }
    }
    return [...s]
}

function uniteUnique(...arrs) {
    let combinedArr = []
    for(let array of arrs){
        combinedArr = [...combinedArr, ...array]
    }
    return [...new Set([...combinedArr])]
}

function uniteUnique(...arrs) {
    let combinedArr = []
    for(let arr of arrs){
        for(let num of arr){
            if(combinedArr.indexOf(num) < 0){
                combinedArr.push(num)
            }
        }
    }
    return combinedArr
}

function uniteUnique(...arrs) {
    let combinedArr = []
    for(let i=0;i<arrs.length;i++){
        for(let j=0;j<arrs[i].length;j++){
            let num = arrs[i][j]
            if(combinedArr.indexOf(num) < 0){
                combinedArr.push(num)
            }
        }
    }
    return combinedArr
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))


// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
