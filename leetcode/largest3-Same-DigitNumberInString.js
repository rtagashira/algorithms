// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

const largestGoodInteger = (num) =>{
    let str = ''
    for(let i=0;i<=num.length-3;i++){
        if(new Set([...num.slice(i,i+3)]).size === 1){
            if(str === '' || +num.slice(i,i+3) > +str) str = num.slice(i,i+3)
        }
    }
    return str
}