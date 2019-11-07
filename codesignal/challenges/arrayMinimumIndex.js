// Given array of integers, find the 0-based index of its minimal element.

let arrayMinimumIndex = (a) => a.indexOf(Math.min(...a))

let arrayMinimumIndex = (a) =>{
    let index = 0,
        value = a[0]
    for(let i in a){
        if(a[i] < value){
            index = +i
            value = a[i]
        }
    }
    return index
}

console.log(arrayMinimumIndex([19, 32, 11, 23]))//2
console.log(arrayMinimumIndex([1, 4, 10, 3, 2]))//0
console.log(arrayMinimumIndex([0, -2, 5, 6, -9]))//4