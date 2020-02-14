// Note: Write a solution with O(n2) time complexity, since this is what you would be asked to do during a real interview.

// You have an array a composed of exactly n elements. Given a number x, determine whether or not a contains three elements for which the sum is exactly x.

const tripletSum = (x, a) =>{
    a.sort((a,b)=>a-b)
    let i = 0

    while(i < a.length - 2){
        let l = i+1,
            r = a.length - 1
        while(l<r){
            let sum = a[i] + a[l] + a[r]
            if(sum === x) return true
            if(sum < x){
                l++
            }else if(sum > x){
                r--
            }
        }
        i++
    }
    return false
}

// const tripletSum = (x, a) =>{
//     const set = new Set(a)
//     for(let i=0;i<a.length-2;i++){
//         for(let j=i+1;j<a.length-1;j++){
//             let diff = x - (a[i] + a[j])
//             if(set.has(diff) && a.lastIndexOf(diff) != j && a.lastIndexOf(diff) != i){
//                 return true
//             }
//         }
//     }
//     return false
// }

console.log(tripletSum(15,[14, 1, 2, 3, 8, 15, 3]))//false
console.log(tripletSum(8,[1, 1, 2, 5, 3]))//true