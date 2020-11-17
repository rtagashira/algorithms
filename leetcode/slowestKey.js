// A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

// The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.

// Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

const slowestKey = (arr, str) =>{
    let max = 0
    let obj = {}
    for(let i=0;i<arr.length;i++){
        if(i === 0){
            obj[arr[i]] = [str[i]]
            if(arr[i] > max) max = arr[i]
        }else{
            let n = arr[i] - arr[i-1]
            if(obj[n]){
                obj[n].push(str[i])
            }else{
                obj[n] = [str[i]]
            }
            if(n > max) max = n
        }
    }
    if(obj[max].length > 1) obj[max].sort()
    return obj[max][obj[max].length-1]
}

console.log(slowestKey(releaseTimes = [9,29,49,50], keysPressed = "cbcd"))//'c'
console.log(slowestKey(releaseTimes = [12,23,36,46,62], keysPressed = "spuda"))//'a'