// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.

const largestInteger = (num) =>{
    let even = []
    let odd = []
    let arr = []
    for(let n of num.toString()){
        if(+n % 2 === 0){
            even.push(+n)
        }else{
            odd.push(+n)
        }
    }
    even.sort((a,b)=>b-a)
    odd.sort((a,b)=>b-a)
    for(let n of num.toString()){
        if(+n % 2 === 0){
            arr.push(even.shift())
        }else{
            arr.push(odd.shift())
        }
    }
    return +arr.join('')
}

console.log(largestInteger(1234))//3412