// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

const selfDividingNumbers = (left, right) =>{
    const arr = []
    for(let i=left;i<=right;i++){
        let str = i.toString(),
            good = true
        for(let char of str){
            if(i % +char !== 0) good = false
        }
        if(good) arr.push(i)
    }
    return arr
}

console.log(selfDividingNumbers(1,22))
                                       //[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]