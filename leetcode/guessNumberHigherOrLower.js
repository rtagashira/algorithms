// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

const guessNumber = function(n) {
    let low = 1
    let high = n
    let mid = Math.floor(n/2)
    let api = guess(mid)
    if(api === 0) return mid
    while(api != 0){
        if(api === -1){
            high = mid
            mid = Math.floor((low + high)/2)
        }else{
            low = mid
            mid = Math.ceil((low + high)/2)
        }
        api = guess(mid)
    }
    return mid
}
// const guessNumber = function(n) {
//     let api = guess(n)
//     if(api === 0) return n
//     let x = n
//     while(api != 0){
//         n--
//         api = guess(n)
//     }
//     return n
// }