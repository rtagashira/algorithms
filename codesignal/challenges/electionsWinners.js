// Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

function electionsWinners(votes, k) {
    let max = Math.max(...votes),
      count = 0
    for(let num of votes){
      if(num + k > max) count++
    }
    // 0 votes left and 1 max returns 1
    //     "        and multiples maxes returns 0
    return k === 0? votes.filter(x=>x===max).length > 1? 0 :1 : count
}

console.log(electionsWinners([2, 3, 5, 2],3))//2
console.log(electionsWinners([1, 3, 3, 1, 1],0))//0
console.log(electionsWinners([5, 1, 3, 4, 1],0))//1
console.log(electionsWinners([1, 1, 1, 1],1))//4
console.log(electionsWinners([1, 1, 1, 1],0))//0
console.log(electionsWinners([3, 1, 1, 3, 1],2))//2