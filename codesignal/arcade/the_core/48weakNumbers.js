// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?
// Return the answer as an array of two elements, where the first element is the answer to the first question, 
// and the second element is the answer to the second question.

// Example

// For n = 9, the output should be
// weakNumbers(n) = [2, 2].

// Here are the number of divisors and the specific weakness of each number in range [1, 9]:

// 1: d(1) = 1, weakness(1) = 0;
// 2: d(2) = 2, weakness(2) = 0;
// 3: d(3) = 2, weakness(3) = 0;
// 4: d(4) = 3, weakness(4) = 0;
// 5: d(5) = 2, weakness(5) = 1;
// 6: d(6) = 4, weakness(6) = 0;
// 7: d(7) = 2, weakness(7) = 2;
// 8: d(8) = 4, weakness(8) = 0;
// 9: d(9) = 3, weakness(9) = 2.
// As you can see, the maximal weakness is 2, and there are 2 numbers with that weakness level.

function weakNumbers(n) {
  let obj = {}
  let bigWeakness = 0
  let frequency = 0
  for(let i=1;i<=n;i++){       //build object with keys of digits from 1 to n
    let d = 0
    for(let j=1;j<=i;j++){
      if(i%j===0)d++
      obj[i] = {divisors: d}   //paired with values of an object with divisor key/value pairs
    }
  }
  for(let i = n;i>=1;i--){
    let w = 0
    for(let j= i;j>=1;j--){
      if(obj[i]['divisors']<obj[j]['divisors']) w++
      if(j===1){
        obj[i]['weakness']=w            //adding a weakness key next to divisors
        if(w>bigWeakness){             //keeping track of the largest weakness value
          bigWeakness = w               // and its frequency
          frequency = 1
        }else if(w=== bigWeakness){
          frequency ++
        }
      }
    } 
  }
  return [bigWeakness,frequency]
}


console.log(weakNumbers(9))//[2,2]
console.log(weakNumbers(500))//[403,1]