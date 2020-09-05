// Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

// Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

// If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

const fairCandySwap = (a,b) =>{
    let set = new Set(b),
        sum = (arr)=>arr.reduce((x,y)=>x+y),
        sumA = sum(a),
        sumB = sum(b)

    for(let el of a){
        let sumAMinusEl = sumA - el,
            sumBPlusEl = sumB + el,
            diff = sumBPlusEl - sumAMinusEl,
            missingEl = diff / 2
        if(set.has(missingEl)) return [el,missingEl]
    }
}

console.log(fairCandySwap([1,1],[2,2]))//[1,2]
console.log(fairCandySwap([2],[1,3]))//[2,3]
console.log(fairCandySwap([1,2],[2,3]))//[1,2]