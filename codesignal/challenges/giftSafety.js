// It's still a few months until Christmas, but some children have already sent their letters to Santa Claus because they all know that the earlier the letter is sent, the more likely it is to be delivered in time. All Santa's correspondence is sorted and organized by Christmas elves, who are good workers but do like to play tricks on the children. Their latest prank goes something like this: they take the name of the present a child wants to receive, choose any three consecutive letters from within it and shuffle their order (note that a triple of letters is considered shuffled only if the position of at least one letter has changed - preserving the positions of all three letters isn't considered shuffling).

// Thus, rather than getting a pair of new skates, the poor child may instead get some useless stakes. However, elves don't always pay attention to how they're shuffling and can sometimes end up with the same word. For example, elves could take the word "doll", choose letters 'o', 'l' and 'l' and shuffle them as follows: the 'o' stays in the same position while the two 'l's are swapped.

// To guard against elf pranks, you've developed a mobile app that measures the safety of a gift request based on how likely it is to be misinterpreted by a shuffle. Write a function that calculates the number of triples formed by consecutive letters that can stay the same after shuffling.

const giftSafety = (gift) =>{
    let count = 0
    for(let i=0;i<gift.length-2;i++){
        let str = gift.slice(i, i+3)
        if([...str].filter(x=>x===str[0]).length>=2){
            count++
        }else if([...str].filter(x=>x===str[1]).length>=2){
            count++
        }
    }
    return count
}

console.log(giftSafety('doll'))//1
console.log(giftSafety("aaaaaaa"))//5
console.log(giftSafety("cat"))//0
console.log(giftSafety("aaaabbbcccdddeffffff"))//17
console.log(giftSafety("cannon"))//3