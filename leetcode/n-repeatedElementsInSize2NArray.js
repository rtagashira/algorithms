// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

const repeatedNTimes = (a) =>{
    let set = new Set()
    for(let n of a){
        if(set.has(n)) return n
        set.add(n)
    }
}

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))//5