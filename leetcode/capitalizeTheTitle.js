// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

const capitalizeTitle = (title) =>{
    let arr = title.split(' ')
    for(let i=0;i<arr.length;i++){
        let str = arr[i]
        if(str.length <= 2){
            arr[i] = str.toLowerCase()
        }else{
            arr[i] = str[0].toUpperCase() + str.slice(1).toLowerCase()
        }
    }
    return arr.join(' ')
}

console.log(capitalizeTitle("capiTalIze tHe titLe"))//"Capitalize The Title"