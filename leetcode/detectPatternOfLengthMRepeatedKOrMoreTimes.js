// Given an array of positive integers arr,  find a pattern of length m that is repeated k or more times.

// A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

// Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

const containsPattern = (arr, m, k) =>{
    let str = arr.join('')
    let set = new Set()
    for(let i=0;i<=arr.length-(m*k);i++){
        let sub = arr.slice(i,i+m),
            s = sub.join('')
            s = s.repeat(k)
            if(set.has(s)) continue
            set.add(s)
            if(str.indexOf(s) > -1) return true
    }
    return false
}

console.log(containsPattern([1,2,4,4,4,4],1,3))//true
console.log(containsPattern([1,2,1,2,1,1,1,3],2,2))//true
console.log(containsPattern([1,2,1,2,1,3],2,3))//false
console.log(containsPattern([1,2,3,1,2],2,2))//false
console.log(containsPattern([2,2,2,2],2,3))//false