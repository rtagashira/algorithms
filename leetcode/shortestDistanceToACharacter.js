// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

const shortestToChar = (s, c) =>{
    let arr = [],
        l = s.indexOf(c),
        r = s.slice(l+1).indexOf(c) + l+1
    if(r === 0) r = s.length * 3
    for(let i=0;i<s.length;i++){
        if(s[i] === c){
            arr.push(0)
        }else{
            if(i > r){
                l = r
                while(r<s.length){
                    r++
                    if(s[r] === c && r < i){
                        l = r
                    }
                    if(s[r] === c && r > i){
                        break
                    }
                }
                if(r<s.length){
                    arr.push(Math.min(Math.abs(i-l),Math.abs(r-i)))
                }else{
                    arr.push(Math.abs(i-l))
                }
            }else{
                if(i<l || r >= s.length){
                    arr.push(Math.abs(l-i))
                }else{
                    arr.push(Math.min(i-l,r-i))
                }
            }
        }
    }
    return arr
}

console.log(shortestToChar("loveleetcode",'e'))
                                                //[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
console.log(shortestToChar("aaab",'b'))
                                        //[3,2,1,0]
console.log(shortestToChar("aaba",'b'))
                                        //[2,1,0,1]
console.log(shortestToChar("abaa",'b'))
                                        //[1,0,1,2]
console.log(shortestToChar("cizokxcijwbyspcfcqws","c"))
                                                       // [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 0, 1, 2, 3]
console.log(shortestToChar("abab","b"))
                                       // [1, 0, 1, 0]