// In a string S of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

// Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

// The final answer should be in lexicographic order.

const largeGroupPositions = (s) =>{
    let arr = s.match(/(.)\1{2,}/g) || []
    let arr2 = []
    for(let i=0;i<arr.length;i++){
        let start = s.indexOf(arr[i])
        let end = start + arr[i].length - 1
        arr2.push([start,end])
        s = '_'.repeat(s.slice(0,end).length) + s.slice(end)
    }
    return arr2
}

console.log(largeGroupPositions("abbxxxxzzy"))//[[3,6]]
console.log(largeGroupPositions("abc"))//[]
console.log(largeGroupPositions("abcdddeeeeaabbbcd"))//[[3,5],[6,9],[12,14]]
console.log(largeGroupPositions("nnnhaaannnm"))//[[0,2],[4,6],[7,9]]