// Given integers n and d, divide n by d as long as the result is integer and return the result.

let divideAsLongAsPossible = (n, d) =>{
    if(n % d !== 0){
        return n
    }else{
        return divideAsLongAsPossible(n/d,d)
    }
}


// let divideAsLongAsPossible = (n, d) =>{
//     while(n % d === 0){
//         n /= d
//     }
//     return n
// }


console.log(divideAsLongAsPossible(36,3))//4
console.log(divideAsLongAsPossible(20,2))//5
console.log(divideAsLongAsPossible(64,4))//1
console.log(divideAsLongAsPossible(162,3))//2