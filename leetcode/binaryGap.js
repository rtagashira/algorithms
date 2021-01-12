// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

const binaryGap = (n)=>{
    let str = n.toString(2)
    let j
    let longest = 0
    for(let i=0;i<str.length;i++){
        if(str[i] === '1'){
            if(j === undefined){
                j = i
            }else{
                let distance = i - j
                if(distance > longest) longest = distance
                j = i
            }
        }
    }
    return longest
}

console.log(binaryGap(22))//2
console.log(binaryGap(5))//2