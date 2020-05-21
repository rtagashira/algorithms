// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

const isMonotonic = (a) =>{
    let increase
    for(let i=1;i<a.length;i++){
        if(increase === undefined){
            a[i] > a[i-1]? increase = true : a[i] < a[i-1]? increase = false: null
        }else if(increase){
            if(a[i] < a[i-1]) return false
        }else if(!increase){
            if(a[i] > a[i-1]) return false
        }
    }
    return true
}

console.log(isMonotonic([1,2,2,3]))//true
console.log(isMonotonic([6,5,4,4]))//true
console.log(isMonotonic([1,3,2]))//false