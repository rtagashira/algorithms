// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

const maxNumberOfBalloons = (text) =>{
    let obj = {}
    let balloon = 'balon'
    let count = 0
    for(let l of text){
        obj[l]? obj[l]++ : obj[l] = 1
    }
    
    for(let l of balloon){
        if(!obj[l]){
            return 0
        }else{
            if(l === 'l' || l === 'o'){
                if(obj[l] < 2) return 0
                if(count === 0){
                    count = Math.floor(obj[l]/2)
                }else{
                    count = Math.min(count, Math.floor(obj[l]/2))
                }
            }else{
                if(count === 0){
                    count = obj[l]
                }else{
                    count = Math.min(count, obj[l])
                }
            }
        }
    }
    return count
}

console.log(maxNumberOfBalloons("nlaebolko"))//1
console.log(maxNumberOfBalloons("loonbalxballpoon"))//2
console.log(maxNumberOfBalloons("leetcode"))//0