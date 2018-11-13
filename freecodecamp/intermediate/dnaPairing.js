// Intermediate Algorithm Scripting: DNA Pairing

// The DNA strand is missing the pairing element.Take each character, get its pair, and 
// return the results as a 2d array.

// Base pairs are a pair of AT and CG.Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped 
// into one encapsulating array.

function pairElement(str) {
    let arr = []
    for(let letter of str){
        if(letter === "A"){
            arr.push(["A","T"])
        }else if(letter === "T"){
            arr.push(["T","A"])
        }else if(letter === "C"){
            arr.push(["C","G"])
        }else{
            arr.push(["G","C"])
        }
    }
    return arr
}
console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))



// pairElement("ATCGA") should return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]].
// pairElement("TTGAG") should return [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]].
// pairElement("CTCTA") should return [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]].