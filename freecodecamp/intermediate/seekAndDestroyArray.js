// You will be provided with an initial array 
// (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements 
// from the initial array that are of the same value as these arguments.


function destroyer(...args) {
    let [arr, ...removeArr] = args
    return arr.filter(x => removeArr.indexOf(x) < 0)
}

function destroyer(...args) {
    let [arr, ...removeArr] = args
    return arr.filter(x => !removeArr.includes(x))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
