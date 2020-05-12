// We are to write the letters of a given string S, from left to right into lines. Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line. We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

// Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line? Return your answer as an integer list of length 2.

const numberOfLines = (widths, S) =>{
    let arr = []
    for(let i in S){
        let k = arr.length - 1 >= 0? arr.length - 1: 0
        let v = widths[S[i].charCodeAt() - 97]
        if(arr[k] < 100){
            if(arr[k] + v <= 100){
                arr[k] += v
            }else{
                arr.push(v)
            }
        }else{
            arr.push(v)
        }
    }
    return [arr.length, arr[arr.length - 1]]
}

console.log(numberOfLines(
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    "abcdefghijklmnopqrstuvwxyz"))//[3, 60]
console.log(numberOfLines(
    [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    "bbbcccdddaaa"))//[2, 4]
