// Given array of integers sequence and some integer fixedElement, output the number of even values in sequence before the first occurrence of fixedElement or -1 if fixedElement is not contained in sequence.

let evenNumbersBeforeFixed = (arr, fE) => {
    let c = 0,
        b = false
    for(let el of arr){
        if(el === fE){
            b = true
            break
        }
        if(el % 2 === 0) c++
    }
    return b? c: -1
}

let evenNumbersBeforeFixed = (arr, fE) =>{
    let fEIndex = arr.indexOf(fE),
        count   = 0
    if(fEIndex === -1) return -1
    
    for(let el of arr.slice(0,fEIndex)){
        if(el % 2 === 0) count++
    }
    return count
}

console.log(evenNumbersBeforeFixed([1, 4, 2, 6, 3, 1],6))//2
console.log(evenNumbersBeforeFixed([2, 2, 2, 1],3))//-1
console.log(evenNumbersBeforeFixed([2, 3, 4, 3],3))//1