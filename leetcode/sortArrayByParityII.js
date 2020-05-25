// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

const sortArrayByParityII = (a) =>{
    let odd = [],
        even = [],
        arr = [],
        e = true
    for(let i=0;i<a.length;i++){
        if(a[i] % 2 === 0){
            even.push(a[i])
        }else{
            odd.push(a[i])
        }
    }
    while(odd.length > 0 || even.length > 0){
        if(e){
            arr.push(even.pop())
            e = false
        }else{
            arr.push(odd.pop())
            e = true
        }
    }
    return arr
}