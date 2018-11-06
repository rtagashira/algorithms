// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.


function truncateString(str, num) {
    return str.length > num? str.slice(0, num) + "...": str
}

function truncateString2(str, num) {
    let finalStr = ''
    if(str.length>num){
        for (let i=0;i<num;i++) {
            finalStr += str[i]
        }
    }else{
        return str
    }
    return finalStr + "..."
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))