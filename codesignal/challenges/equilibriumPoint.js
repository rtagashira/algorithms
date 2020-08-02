// Equilibrium position in an array is a position at which the sum of elements before it is equal to the sum of elements after it. Given an array arr, your task is to determine at which position equilibrium first occurs in the array. If there is no equilibrium position, the answer should be -1.

const equilibriumPoint = (arr) =>{
    if(arr.length === 1) return 1
    const sum = (a) => a.reduce((p,n)=>p+n)
    let left = 0,
        i = 1,
        right = sum(arr.slice(i))
        if(left === right) return i
    while(i < arr.length){
        left += arr[i-1]
        right -= arr[i]
        if(left === right) return i + 1
        i++
    }
    return -1
}

console.log(equilibriumPoint([1, -5, 2, 3]))//1
console.log(equilibriumPoint([10, 5, 3, 5, 2, 2, 6, 8]))//4