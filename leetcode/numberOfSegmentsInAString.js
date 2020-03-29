// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

const countSegments = (s) =>{
    let segment = false,
        count = 0

    for(let char of s){
        if(!segment){
            if(char !== ' '){
                segment = true
                count++
            }
        }else{
            if(char === ' '){
                segment = false
            }
        }
    }
    return count
}

console.log(countSegments("Hello, my name is John"))//5