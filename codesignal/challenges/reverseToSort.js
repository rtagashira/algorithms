// Determine if it is possible to sort an array by reversing one of its contiguous subarrays.

const reverseToSort = (arr) =>{
    let dup       = [...arr],
        sortedStr = dup.sort((a,b)=>a-b).join(),
        set       = new Set(arr)
    if(set.size !== arr.length) return false
    
    for(let i=0;i<arr.length-1;i++){
        for(let j=1;j<=arr.length;j++){
            let temp = [...arr.slice(0,i), ...arr.slice(i,j).reverse(), ...arr.slice(j)].join()
            if(temp === sortedStr) return true
        }
    }
    return false
}

console.log(reverseToSort([-1, 5, 4, 3, 2, 8]))//true
console.log(reverseToSort([1, 3, 2, 5, 4, 6]))//false
console.log(reverseToSort([2, 3, 2, 4]))//false
console.log(reverseToSort([19, 32, 23]))//true
console.log(reverseToSort([-100, 4, 10, 4, 2]))//false