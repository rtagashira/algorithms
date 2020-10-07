// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

const numEquivDominoPairs = (a) =>{
    let count = 0
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            let a1 = a[i][0],
                a2 = a[i][1],
                b1 = a[j][0],
                b2 = a[j][1]
            if((a1 === b1 && a2 === b2) || (a1 === b2 && a2 === b1)) count++
        }
    }
    return count
}

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]))//1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]))//3
console.log(numEquivDominoPairs([[2,1],[1,2],[1,2],[1,2],[2,1],[1,1],[1,2],[2,2]]))//15