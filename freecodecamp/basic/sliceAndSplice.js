// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, 
// in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.

function frankenSplice1(arr1, arr2, n) {
    let arr3 = [...arr2]
    for(let i=arr1.length-1; i>=0;i--){
        arr3.splice(n,0,arr1[i])
    }
    return arr3
}

console.log(frankenSplice1([1, 2, 3], [4, 5, 6], 1))

function frankenSplice(arr1, arr2, n) {
    if (n===0){
        return [...arr1,...arr2]
    }else if (n>0){
        return [...arr2.slice(0,n),...arr1,...arr2.slice(n)]
    }
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
console.log(frankenSplice([1, 2], ["a", "b"], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))



// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].