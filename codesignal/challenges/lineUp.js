// To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.

// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

const lineUp = (commands) =>{
    let times = 0,
        same = true
    for(let char of commands){
        if(same){
            if(char === 'A'){
                times++
            }else{
                same = false
            }
        }else{
            if(char !== 'A'){
                same = true
                times++
            }
        }
    }
    return times
}

console.log(lineUp("LLARL"))//3
console.log(lineUp("AAAAAAAAAAAAAAA"))//15
console.log(lineUp("AALAAALARAR"))//5