// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

const canMakeArithmeticProgression = (arr) =>{
    arr.sort((a,b)=>a-b)
    let diff = arr[1] - arr[0]
    for(let i=2;i<arr.length;i++){
        if(arr[i] - arr[i-1] !== diff) return false
    }
    return true
}

console.log(canMakeArithmeticProgression([-68,-96,-12,-40,16]))//true