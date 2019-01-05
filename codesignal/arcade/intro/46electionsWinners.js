// Given an array of the numbers of votes given to each of the candidates so far, 
// and an integer k equal to the number of voters who haven't cast their vote yet, 
// find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. 
// If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

function electionsWinners2(votes, k) {
  let possibleWinners = 0
  const biggestVote = Math.max(...votes)
  for(let num of votes){
    if(num + k >biggestVote){
      possibleWinners ++
    }
  }
  if(k===0){
    if(votes.filter(x=>x===biggestVote).length>1){
      return 0
    }else{
      return 1
    }
  }else{
    return possibleWinners
  }
}
//------------------------------------------------------------------
function electionsWinners(votes, k) {
  var max=Math.max(...votes)
  var r=votes.filter(x=>x+k>max||x===max).length
  return k?r:r==1?1:0
}


console.log(electionsWinners([2, 3, 5, 2],3))//2
console.log(electionsWinners([5, 1, 3, 4, 1],0))//1