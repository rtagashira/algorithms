// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.


const reverseString = (s) => {
    for(let i=0;i<s.length/2;i++){
        [s[i],s[s.length-1 - i]] = [s[s.length-1 - i],s[i]]
    }
}

// const reverseString = (s) => s.reverse()