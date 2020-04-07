// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Note:
// You may assume the greed factor is always positive.
// You cannot assign more than one cookie to one child.

const findContentChildren = (g, s) =>{
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let count = 0,
        i = 0,
        j = 0
    while(i < g.length && j < s.length){
        if(g[i] <= s[j]){
            count++
            i++
            j++
        }else if(g[i] > s[j]){
            j++
        }
    }
    return count
}

console.log(findContentChildren([10,9,8,7],[5,6,7,8]))//2