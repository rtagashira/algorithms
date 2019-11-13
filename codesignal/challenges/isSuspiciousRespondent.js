// You are processing the results of an online poll and your task is to exclude answers that might have been submitted by bots from the final results. The poll consists of three questions, the answer to each one is either true or false. You think that a response is suspicious (i.e. it might be from a bot) if all of the submissions are the same.

// Given a response list to each of the three questions, check if it might have come from a bot using the above described criteria.

let isSuspiciousRespondent = (a1, a2, a3) => a1 === a2 && a1 === a3
// let isSuspiciousRespondent = (a1, a2, a3) => [a1,a2,a3].every(x=>x===a1)

console.log(isSuspiciousRespondent(false,false,false))//true
console.log(isSuspiciousRespondent(true,true,false))//false
console.log(isSuspiciousRespondent(true,false,false))//false
console.log(isSuspiciousRespondent(true,true,true))//false