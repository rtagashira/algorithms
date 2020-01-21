// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

const convert = (s, numRows) =>{
    if(numRows === 1) return s
    let arr = [],
        up  = true,
        row = 0
    for(let i=0;i<s.length;i++){
        arr[row]? arr[row] += s[i] : arr[row] = s[i]
        if(up){
            if(row === numRows - 1){
                up = false
                row--
            }else{
                row++
            }
        }else{
            if(row === 0){
                up = true
                row++
            }else{
                row--
            }
        }
    }
    return arr.join('')
};

console.log(convert("PAYPALISHIRING",3))//"PAHNAPLSIIGYIR"
console.log(convert("AB",1))//"AB"