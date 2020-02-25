// Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

const areFollowingPatterns = (strings, patterns) =>{
    const words = {},
          indexes = {},
          set = new Set()
    //build objects 'words' and 'indexes'
    // 'words' key:value patterns[i] : [i]
    // 'indexes' key:value  i : (i of the identical word)
    for(let i=0;i<patterns.length;i++){
        if(words[patterns[i]]){
            indexes[i] = words[patterns[i]][0]
        }else{
            words[patterns[i]] = [i]
        }
    }
    
    for(let i=0;i<strings.length;i++){
        //a set to make sure unique words aren't repeated
        if(indexes[i] === undefined && set.has(strings[i])) return false
        set.add(strings[i])
        //use 'indexes' object to make sure dup words are identical
        if(typeof indexes[i] === 'number'){
            if(strings[i] != strings[indexes[i]]) return false
        }
    }
    return true
}

console.log(areFollowingPatterns(["cat", 
"dog", 
"dog"],["a", 
"b", 
"b"]))//true
console.log(areFollowingPatterns(["cat", 
"dog", 
"doggy"],["a", 
"b", 
"b"]))//false
console.log(areFollowingPatterns(["aaa", 
"aab", 
"aaa"],["aaa", 
"aaa", 
"aaa"]))//false