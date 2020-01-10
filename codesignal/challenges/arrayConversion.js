// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

const arrayConversion = (arr) =>{
    let loop = 1
    while(arr.length > 1){
        let temp  = [],
            first = true
        for(let i in arr){
            let pair = loop % 2 === 1? arr[i] + arr[i-1]: arr[i] * arr[i-1]
            !first? (temp.push(pair), first = !first): first = !first
        }
        arr = temp
        loop++
    }
    return arr[0]
}

// const arrayConversion = (arr) =>{
//     let loop = 1
//     while(arr.length > 1){
//         if(loop % 2 === 1){
//             let temp = [],
//                 first= true
//             for(let i in arr){
//                 !first? (temp.push(arr[i] + arr[i-1]), first = !first): first = !first
//             }
//             arr = temp
//         }else{
//             let temp = [],
//                 first= true
//             for(let i in arr){
//                 !first? (temp.push(arr[i] * arr[i-1]), first = !first): first = !first
//             }
//             arr = temp
//         }
//         loop++
//     }
//     return arr[0]
// }

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))//186
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))//64
console.log(arrayConversion([3, 3, 5, 5]))//60
console.log(arrayConversion([-1, 1, 2, 3, 5, 5, 3, 7]))//100
console.log(arrayConversion([99]))//99