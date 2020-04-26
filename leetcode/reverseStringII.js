// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

const reverseStr = (s, k) =>{
    let str = '',
        series = true,
        c = 0
    if(s.length < k){
        return [...s].reverse().join('')
    }else {
        let temp =''
        for(let i=0;i<s.length;i++){
            if(series){
                temp = s[i] + temp
                c++
                if(c === k){
                    str += temp
                    c = 0
                    series = false
                    temp = ''
                }
            }else{
                str += s[i]
                c++
                if(c === k){
                    c = 0
                    series = true
                }
            }
            // last letter
            if(i === s.length - 1 && c !== k){
                if(series){
                    return str + temp
                }
            }
        }
    }
    return str
}

console.log(reverseStr("abcdefg",2))//"bacdfeg"
console.log(reverseStr("abcdefg", 3))//"cbadefg"