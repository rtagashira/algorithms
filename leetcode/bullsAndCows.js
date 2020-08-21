// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

// Please note that both secret number and friend's guess may contain duplicate digits.

const getHint = (secret, guess) =>{
    let bulls = 0,
        cows = 0,
        objS = {},
        objG = {}
    //build objS
    for(let i=0;i<secret.length;i++){
        objS[secret[i]]? objS[secret[i]]++ : objS[secret[i]] = 1
    }
    //build objG to find bulls and cows
    for(let i=0;i<guess.length;i++){
        if(objG[guess[i]] === undefined) objG[guess[i]] = 0
        if(guess[i] === secret[i]){
            if(objG[guess[i]] < objS[guess[i]]){
            bulls++
            objG[guess[i]]++
            }else{
            bulls++
            cows--
            }
        }else if(objG[guess[i]] < objS[guess[i]]){
            cows++
            objG[guess[i]]++
        }
    }
    return bulls + 'A' + cows + 'B'
}

console.log(getHint('1807','7810'))//'1A3B'
console.log(getHint("1123", "0111"))//"1A1B"
console.log(getHint("1122", "1222"))//"3A0B"