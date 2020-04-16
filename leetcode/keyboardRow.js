// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

const findWords = (words) =>{
    let row1 = new Set(['q', 'w', 'e','r','t','y','u','i','o','p'])
    let row2 = new Set(['a','s','d','f','g','h','j','k','l'])
    let row3 = new Set(['z','x','c','v','b','n','m'])
    let arr = []

    for(let i=0;i<words.length;i++){
        let row
        let word = words[i].toLowerCase()
        for(let j=0;j<word.length;j++){
            let l = word[j]
            if(word.length === 1) arr.push(words[i])
            if(j === 0){
                if(row1.has(l)){
                    row = 1
                }
                if(row2.has(l)){
                    row = 2
                }
                if(row3.has(l)){
                    row = 3
                }
            }else{
                if(row === 1){
                    if(!row1.has(l)){
                        break
                    }
                    if(j === word.length - 1){
                        arr.push(words[i])
                    }
                }else if(row === 2){
                    if(!row2.has(l)){
                        break
                    }
                    if(j === word.length - 1){
                        arr.push(words[i])
                    }
                }else if(row === 3){
                    if(!row3.has(l)){
                        break
                    }
                    if(j === word.length - 1){
                        arr.push(words[i])
                    }
                }
            }
        }
    }
    return arr
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))//["Alaska", "Dad"]
console.log(findWords(["a","b"]))//["Alaska", "Dad"]