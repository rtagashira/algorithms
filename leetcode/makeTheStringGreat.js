// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

const makeGood = (s) =>{
    let arr = [...s],
        loop = true
    
    while(loop){
        let noDelete = true
        for(let i=0;i<s.length;i++){
            if(/[a-z]/.test(arr[i])){
                if(arr[i+1]){
                    if(arr[i+1] === arr[i].toUpperCase()){
                        arr[i] = ''
                        arr[i+1] = ''
                        noDelete = false
                    }
                }
            }else if(/[A-Z]/.test(arr[i])){
                if(arr[i+1]){
                    if(arr[i+1] === arr[i].toLowerCase()){
                        arr[i] = ''
                        arr[i+1] = ''
                        noDelete = false
                    }
                }
            }
        }
        if(noDelete){
            loop = false
        }else{
            arr = arr.filter(x=>x!='')
        }
    }
    s = arr.join('')
    return s
}

console.log(makeGood("leEeetcode"))//"leetcode"
console.log(makeGood("abBAcC"))//""
console.log(makeGood("s"))//"s"