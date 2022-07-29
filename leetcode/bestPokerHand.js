// You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

// The following are the types of poker hands you can make from best to worst:

// "Flush": Five cards of the same suit.
// "Three of a Kind": Three cards of the same rank.
// "Pair": Two cards of the same rank.
// "High Card": Any single card.
// Return a string representing the best type of poker hand you can make with the given cards.

// Note that the return values are case-sensitive.

const bestHand = (ranks, suits) =>{
    let set = new Set(suits)
    let pair = false
    let obj = {}
    if(set.size === 1) return 'Flush'
    for(let n of ranks){
        obj[n]? obj[n]++ : obj[n] = 1
        if(obj[n] === 2) pair = true
        if(obj[n] === 3) return 'Three of a Kind'
    }
    
    if(pair){
        return 'Pair'
    }else{
        return 'High Card'
    }
}

console.log(bestHand(ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]))//"Flush"
console.log(bestHand(ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]))//"Three of a Kind"
console.log(bestHand(ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]))//"Pair"