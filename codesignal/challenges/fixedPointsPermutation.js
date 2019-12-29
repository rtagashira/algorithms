// Find the number of fixed points in a permutation of [1, 2, 3, ..., n] for some n.

// A fixed point of a permutation p consisting of integers from 1 to n is such a number i (1 ≤ i ≤ n) that p[i] = i.

let fixedPointsPermutation = (permutation) =>{
    let count = 0
    for(let i=0;i<permutation.length;i++){
        if(permutation[i] === i + 1) count++
    }
    return count
}

console.log(fixedPointsPermutation([1, 3, 2, 4, 5, 6]))//4
console.log(fixedPointsPermutation([1, 2, 3]))//3
console.log(fixedPointsPermutation([3, 1, 2]))//0