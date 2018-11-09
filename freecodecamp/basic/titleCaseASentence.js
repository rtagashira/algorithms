// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase3(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
}

console.log(titleCase3("I'm a little tea pot"))


function titleCase2(str) {
    return str
        .split(" ")
        .reduce((acc, word, index, array)=> {
            return acc + word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
        },"")
        .slice(0,-1)
}

console.log(titleCase2("I'm a little tea pot"))


function titleCase(str) {
    return str.match(/\S+/g)
              .map((word)=> word[0].toUpperCase() + word.slice(1).toLowerCase())
              .join(' ')              
}

console.log(titleCase("I'm a little tea pot"));