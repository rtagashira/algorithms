// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

const sortString = (s) =>{
    let small,
        large,
        arr = [],
        obj = {},
        result = ''
    //build obj with key:value pairs of   charCode: array of indexes
    //build array of charCodes
    for(let i=0;i<s.length;i++){
        let code = s[i].charCodeAt()
        obj[code]? obj[code].push(i): (obj[code] = [i], arr.push(code))
    }
    arr.sort((a,b)=>a-b)

    //iterate through the charCode array to find small//large letters, removing an index from the relative object array each time
    while(result.length < s.length){
        for(let i=0;i<arr.length;i++){
            if(obj[arr[i]].length > 0){
                if(small === undefined || arr[i] > small){
                    small = arr[i]
                    result += String.fromCharCode(arr[i])
                    obj[arr[i]].shift()

                }
            }
        }
        small = undefined

        for(let i=arr.length-1;i>=0;i--){
            if(obj[arr[i]].length > 0){
                if(large === undefined || arr[i] < large){
                    large = arr[i]
                    result += String.fromCharCode(arr[i])
                    obj[arr[i]].shift()

                }
            }
        }
        large = undefined
    }
    return result
}

// const sortString = (s) =>{
//     let small,
//         large,
//         arr = [],
//         set = new Set(),
//         result = ''
    
//     for(let i=0;i<s.length;i++){
//         arr.push(s[i].charCodeAt())
//     }
//     arr.sort((a,b)=>a-b)
    
//     while(result.length < s.length){
//         for(let i=0;i<arr.length;i++){
//             if(!set.has(i)){
//                 if(small === undefined || arr[i] > small){
//                     small = arr[i]
//                     set.add(i)
//                     result += String.fromCharCode(small)
//                 }
//             }
//         }
//         small = undefined

//         for(let i=arr.length-1;i>=0;i--){
//             if(!set.has(i)){
//                 if(large === undefined || arr[i] < large){
//                     large = arr[i]
//                     set.add(i)
//                     result += String.fromCharCode(large)
//                 }
//             }
//         }
//         large = undefined
//     }
//     return result
// }

console.log(sortString("aaaabbbbcccc"))//"abccbaabccba"
console.log(sortString("rat"))//"art"
console.log(sortString("leetcode"))//"cdelotee"