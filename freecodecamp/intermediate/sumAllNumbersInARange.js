// We'll pass you an array of two numbers. Return the sum of those two numbers
//  plus the sum of all the numbers between them.

// The lowest number will not always come first.


function sumAll(arr) {
    const first = Math.min(...arr)
    const last = Math.max(...arr)
    let sum = 0
    for(let i=first;i<=last;i++){
        sum += i
    }
    return sum
}

console.log(sumAll([4, 1]))//10
console.log(sumAll([3, 0]))//6