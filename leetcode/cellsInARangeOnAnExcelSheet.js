// A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

// <col> denotes the column number c of the cell. It is represented by alphabetical letters.
// For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
// <row> is the row number r of the cell. The rth row is represented by the integer r.
// You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

const cellsInRange = (s) =>{
    let arr = []
    let code = s.charCodeAt(0)
    let s1 = s[0]
    let row = +s[1]
    while(code <= s.charCodeAt(3)){
        for(let i=row;i<=+s[4];i++){
            arr.push(s1+i)
        }
        code++
        s1 = String.fromCharCode(code)
    }
    return arr
}

console.log(cellsInRange("K1:L2"))//["K1","K2","L1","L2"]
console.log(cellsInRange("A1:F1"))//["A1","B1","C1","D1","E1","F1"]