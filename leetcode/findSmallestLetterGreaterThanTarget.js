// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

const nextGreatestLetter = (arr, target) =>{
    let t = target.charCodeAt()
    for(let l of arr){
        let n = l.charCodeAt()
        if(n > t) return l
    }
    return arr[0]
}

console.log(nextGreatestLetter(["c", "f", "j"],"a"))//'c'
console.log(nextGreatestLetter(["c", "f", "j"],"c"))//'f'
console.log(nextGreatestLetter(["c", "f", "j"],"d"))//'f'
console.log(nextGreatestLetter(["c", "f", "j"],"g"))//'j'
console.log(nextGreatestLetter(["c", "f", "j"],"j"))//'c'