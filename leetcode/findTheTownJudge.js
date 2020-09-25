// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

const findJudge = (n, trust) =>{
    if(n === 1 && trust.length === 0) return 1
    let obj = {}
    let obj2 = {}
    let people = []
    for(let el of trust){
        obj[el[1]]? obj[el[1]]++ : obj[el[1]] = 1
        obj2[el[0]]? obj2[el[0]]++ : obj2[el[0]] = 1
        if(obj[el[1]] === n - 1 ) people.push(el[1])
    }
    for(let p of people){
        if(obj2[p] === undefined) return p
    }
    return -1
}

console.log(findJudge(N = 2, trust = [[1,2]]))//2
console.log(findJudge(N = 3, trust = [[1,3],[2,3]]))//3
console.log(findJudge(N = 3, trust = [[1,3],[2,3],[3,1]]))//-1
console.log(findJudge(N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]))//3