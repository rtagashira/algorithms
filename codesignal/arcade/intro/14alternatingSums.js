// Several people are standing in a row and need to be divided into two teams.The first person goes into 
// team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people.Return an array of two integers, 
// where the first element is the total weight of team 1, and the second element is the total weight of team 2 
// after the division is complete.

//   Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
//   45 ≤ a[i]≤ 100.

//   [output] array.integer

function alternatingSums1(a) {
  let team1 = 0
  let team2 = 0
  for(let i=0;i<a.length;i++){
    if(i%2===0){
      team1+=a[i]
    }else{
      team2+=a[i]
    }
  }
  return [team1,team2]
}

let alternatingSums2 = a => a.reduce((p, v, i) => (p[i & 1] += v, p), [0, 0])

function alternatingSums(a) {
  return a.reduce((sum, next, i) => i % 2 === 0 ? [sum[0] + next, sum[1]] : [sum[0], sum[1] + next], [0, 0]);
}

console.log(alternatingSums([50, 60, 60, 45, 70]))//[180, 105]