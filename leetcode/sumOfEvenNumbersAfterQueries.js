// We have an array A of integers, and an array queries of queries.

// For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

// (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

// Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

const sumEvenAfterQueries = (a, q) =>{
    const evenSum = (arr)=> arr.reduce((acc,v)=>v%2===0?acc+=v:acc,0)
    let arr = []
    for(let [v,i] of q){
        a[i] = a[i] + v
        arr.push(evenSum(a))
    }
    return arr
}

console.log(sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]))//[8,6,2,4]