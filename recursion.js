// MIT lecture
// https://www.youtube.com/watch?v=WPSeyjX1-4s

// iteration vs recursion (basic multiplication)
function multi_iter(a,b){
  result = 0
  while(b >0){
    result += a
    b -= 1
  }
  return result
}
console.log(multi_iter(5,5))

function multi_recur(a,b){
  if(b===1){
    return a
  }else{
    return a + multi_recur(a,b-1)
  }
}
console.log(multi_recur(5,5))
//------------------------------------------------------------
// factorial iteration vs recursion
function factorial_iter(n){
  let prod = 1
  for(let i = n;i>=1;i--){
    prod *= i
  }
  return prod
}
function factorial(n){
  if(n===1){
    return 1
  }else{
    return n * factorial(n-1)
  }
}
console.log(factorial_iter(4));
console.log(factorial(4));
//------------------------------------------------
// towers of Hanoi
function towers(n,fr,to,spare){
  function instruct(a, b){
    console.log(`move from ${a} to ${b}`)
  }
  if(n===1){
    instruct(fr,to)
  }else{
    towers(n-1,fr,spare,to)
    towers(1,fr,to,spare)
    towers(n-1,spare,to,fr)
  }
}
console.log(towers(4,1,2,3))
//------------------------------------------------------------------
function fibonacci(n){
  if(n < 2){
    return 1
  }else{
    return fibonacci(n-1)+fibonacci(n-2)
  }
}

console.log(fibonacci(4))
//-----------------------------------------------------------
// fibonacci with memoization
function fibonacci_mem(n,d){
  if(d[n]){
    return d[n]
  }else{
    let ans = fibonacci_mem(n-1,d) + fibonacci_mem(n-2,d)
    d[n] = ans
    return ans
  }
}
console.log(fibonacci_mem(6,{1:1,2:2}));

//-----------------------------------------------------------------

function palindrome(str){
  if(str.length<=1){
    return true
  }else{
    return str[0] === str[str.length-1] && palindrome(str.slice(1,str.length-1))
  }
}
function cleanString(str){
  return str.toLowerCase().match(/[a-z]/g).join()
}
console.log(palindrome(cleanString('baab')))
console.log(palindrome(cleanString('baaba')))
console.log(palindrome(cleanString('o#%!!ooo4234')))

