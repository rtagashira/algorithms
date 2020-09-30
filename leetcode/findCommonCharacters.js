// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

const commonChars = (a) =>{
    let obj = {}
    let obj2 = {}
    let arr = []
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            let l = a[i][j]
            if(i===0){
                obj[l]? obj[l]++ : obj[l] = 1
            }else{
                if(obj[l]){
                    if(obj2[l]){
                        if(obj2[l] + 1 <= obj[l]) obj2[l]++
                    }else{
                        obj2[l] = 1
                    }
                } 
            }
        }
        if(i > 0){
            obj = obj2
            obj2 = {}
        }
    }
    for(let key in obj){
        while(obj[key]){
            arr.push(key)
            obj[key]--
        }
    }
    return arr
}

console.log(commonChars(["bella","label","roller"]))//['e','l','l']
console.log(commonChars(["cool","lock","cook"]))//["c","o"]