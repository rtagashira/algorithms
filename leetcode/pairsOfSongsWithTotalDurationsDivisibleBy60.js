// In a list of songs, the i-th song has a duration of time[i] seconds. 

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

const numPairsDivisibleBy60 = (arr) =>{
    let count = 0
    for(let i=0;i<arr.length - 1;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i] + arr[j]) % 60 === 0) count++
        }
    }
    return count
}

console.log(numPairsDivisibleBy60([30,20,150,100,40]))//3
console.log(numPairsDivisibleBy60([60,60,60]))//3