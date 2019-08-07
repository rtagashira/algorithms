// You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time. Calculate how many distinct ways you can climb to the top of the staircase.




//too slow
function climbingStairs(n) {
  let obj = {}
  function helper(n,s=''){
    let sum = s? +[...s].reduce((acc,v)=>+acc + +v): 0
    if(s && sum >= n){
      if(sum === n){
        obj[s] = 1
      }
    }else{
      helper(n, s + '1')
      helper(n, s + '2')
    }
  }
  helper(n)
  return Object.keys(obj).length
}

console.log(climbingStairs(1))//1
console.log(climbingStairs(2))//2
console.log(climbingStairs(26))//196418
console.log(climbingStairs(23))//46368