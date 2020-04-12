// You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described above.


const licenseKeyFormatting = (S, K) =>{
    let str = S.split('-')
               .join('')
               .toUpperCase()
    let arr = []
    let temp = ''

    for(let i=str.length-1;i>=0;i--){
        if(temp.length < K){
            temp = str[i] + temp
        }else if(temp.length === K){
            arr.unshift(temp)
            temp = str[i]
        }
        
        if(i === 0){
            if(temp.length === K){
                arr.unshift(temp)
            }else{
                arr.unshift(temp)
            }
        }
    }
    return arr.join('-')
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w",4))//"5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J",2))//"2-5G-3J"