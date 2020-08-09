// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (arr) =>{
    let prefix = ''
    if(arr[0] === '' || arr.length === 0) return ''
    if(arr.length === 1) return arr[0]
    for(let i=1;i<=arr[0].length;i++){
        let temp = arr[0].slice(0,i)
        let pass = true
        for(let j=1;j<arr.length;j++){
            if(arr[j].indexOf(temp) !== 0) pass = false
            if(!pass){
                return prefix
            }else if(arr[j].indexOf(temp) === 0 && j === arr.length - 1 && pass){
                prefix = temp    
            }
        }
    }
    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))//'fl'
console.log(longestCommonPrefix(["dog","racecar","car"]))//''
console.log(longestCommonPrefix(["c","c"]))//''
console.log(longestCommonPrefix(["c","acc","ccc"]))//''