// You've been invited to a job interview at a famous company that tests programming challenges. To evaluate your coding skills, they have asked you to parse a given problem's input given as an inputString string, and count the number of primitive type elements within it.

// The inputString can be either a primitive type variable or an array (possibly multidimensional) that contains elements of the primitive types.
// A primitive type variable can be:

// an integer number;
// a string, which is surrounded by " characters (note that it may contain any character except ");
// a boolean, which is either true or false.
// Return the total number of primitive type elements inside inputString.

// 23/25 tests
const countElements = (str) =>{
    let count = 0
    let arr = str.match(/"[^"]+"/g)
    if(arr !== null){
        if(arr !== null) count += arr.length
        for(let s of arr) str = str.replace(s, '')
    }

    arr = str.match(/[0-9]+|true|false/g)
    if(arr !== null) count += arr.length
    return count
}


console.log(countElements("[[0, 20], [33, 99]]"))//4
console.log(countElements("[ \"one\", 2, \"three\" ]"))//3
console.log(countElements("true"))//1
console.log(countElements("[\"oh, no! kind, of, tricky\", \"test, case\"]"))//2