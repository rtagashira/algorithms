// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

const findPoisonedDuration = (arr, d) =>{
    let time = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] <= arr[i-1]) time -= arr[i-1] + 1 - arr[i]
        time += d
        arr[i] += d - 1
    }
    return time
}

console.log(findPoisonedDuration(timeSeries = [1,4], duration = 2))//4
console.log(findPoisonedDuration(timeSeries = [1,2], duration = 2))//3