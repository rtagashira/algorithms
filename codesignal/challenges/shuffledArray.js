// A noob programmer was given two simple tasks: sum and sort the elements of the given array
// a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, and it's giving him trouble since he modified it.

// Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.

const shuffledArray = (arr) =>{
    arr.sort((a,b)=>a-b)
    const sum = (a)=>a.reduce((p,n)=>p+n)
    for(let i=0;i<arr.length;i++){
        let num       = arr[i],
            restOfArr = [...arr.slice(0,i), ...arr.slice(i+1)]
        if(num === sum(restOfArr)) return restOfArr
    }
}

console.log(shuffledArray([1, 12, 3, 6, 2]))//[1, 2, 3, 6]
console.log(shuffledArray([1, -3, -5, 7, 2]))//[-5, -3, 2, 7]
console.log(shuffledArray([2, -1, 2, 2, -1]))//[-1, -1, 2, 2]
console.log(shuffledArray([-3, -3]))//[-3]
console.log(shuffledArray([37, 11, -37, -85, -67, 32, 90, -90, 56, 80, 37]))
                                                                             //[-90, -85, -67, -37, 11, 37, 37, 56, 80, 90]