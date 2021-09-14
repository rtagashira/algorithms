// Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

// Return an array of the most visited sectors sorted in ascending order.

// Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).

const mostVisited = (n, rounds) =>{
    let obj = {}
    let count = 0
    let arr = []
    let i = rounds[0] - 1
    for(let j=0;j<rounds.length;j++){

        if(i > rounds[j]){
            while(i != rounds[j]){
                i<n? i++ : i=1
                obj[i]? obj[i]++ : obj[i] = 1
                if(obj[i] > count){
                    count = obj[i]
                    arr = [i]
                }else if(obj[i] === count){
                    arr.push(i)
                }
            }
        }else{
            while(i < rounds[j]){
                i < n? i++ : i = 1
                obj[i]? obj[i]++ : obj[i] = 1
                if(obj[i] > count){
                    count = obj[i]
                    arr = [i]
                }else if(obj[i] === count){
                    arr.push(i)
                }
            }
        }
    }
    return arr.sort((a,b)=>a-b)
}

console.log(mostVisited(n = 4, rounds = [1,3,1,2]))//[1,2]
console.log(mostVisited(n = 2, rounds = [2,1,2,1,2,1,2,1,2]))//[2]
console.log(mostVisited(n = 7, rounds = [1,3,5,7]))//[1,2,3,4,5,6,7]