// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

const replaceWords = (d, str)=>{
    d.sort((a,b)=>a.length - b.length)
    let arr = str.split(' ')
    
    for(let i=0;i<arr.length;i++){
        for(r of d){
            if(arr[i].indexOf(r) === 0){
                arr[i] = r
                break
            }
        }
    }
    return arr.join(' ')
}

console.log(replaceWords(dictionary = ["cat","bat","rat"], 
    sentence = "the cattle was rattled by the battery"))//"the cat was rat by the bat"
console.log(replaceWords(dictionary = ["a","b","c"], 
    sentence = "aadsfasf absbs bbab cadsfafs"))//"a a b c"
console.log(replaceWords(dictionary = ["a", "aa", "aaa", "aaaa"], 
    sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"))//"a a a a a a a a bbb baba a"