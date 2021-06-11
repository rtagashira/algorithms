// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

const numTilePossibilities = (tiles) =>{
    let set = new Set()
    const helper = (a,b = '')=>{
        if(b.length === tiles.length){
            set.add(b)
        }else{
            for(let i=0;i<a.length;i++){
                let str = a.slice(0,i) + a.slice(i+1)
                let letter = a[i]
                set.add(b + letter)
                helper(str, b + letter)
            }
        }
    }
    helper(tiles)
    return set.size
}

console.log(numTilePossibilities("AAB"))//8
console.log(numTilePossibilities("AAABBC"))//188
console.log(numTilePossibilities("V"))//1