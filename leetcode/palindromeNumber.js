// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

const isPalindrome = (x) =>{
    let str = x.toString()
    for(let i=0;i<str.length/2;i++){
        if(str[i] !== str[str.length - 1 - i]) return false
    }
    return true
}


// const isPalindrome = (x) => x.toString() === [...x.toString()].reverse().join('')

console.log(isPalindrome(121))//true