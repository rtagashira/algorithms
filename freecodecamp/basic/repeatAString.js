// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.


function repeatStringNumTimes2(str, num){
    return num>0? str.repeat(num): ""
}

function repeatStringNumTimes(str, num){
    let str2 = ''
    for(let i=0;i<num;i++){
        str2 += str
        ;
    }
    return num > 0 ? str2 : ""
}
console.log(repeatStringNumTimes("abc", 3));