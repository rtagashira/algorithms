// Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

// Build the target array using the following operations:

// Push: Read a new element from the beginning list, and push it in the array.
// Pop: delete the last element of the array.
// If the target array is already built, stop reading more elements.
// You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.

// Return the operations to build the target array.

// You are guaranteed that the answer is unique.

const buildArray = (target, n) =>{
    let count = 1,
        arr = []
    for(let num of target){
        if(count === num){
            arr.push('Push')
            count++
        }else{
            for(let i=0;i<num-count;i++){
                arr.push("Push",'Pop')
            }
            arr.push('Push')
            count = num + 1
        }

    }
    return arr
}

console.log(buildArray([1,3],3))//["Push","Push","Pop","Push"]
console.log(buildArray([1,2,3],3))//["Push","Push",Push"]
console.log(buildArray([2,3,4],4))//["Push","Pop","Push","Push","Push"]