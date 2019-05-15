// You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. You want to know how many distinct sums you can make from non-empty groupings of these coins.

function possibleSums(coins, quantity) {
  let combos = (2 ** quantity.reduce((prev,next)=>prev+next)) - 1
  let sums = new Set()

  // use quntity array to put coins in coins array to use for combos
  for(let i=0;i<coins.length;i++){
    for(let j=1;j<quantity[i];j++){
      coins.push(coins[i])
    }
  }

  while(combos){
    // change combos integer to binary, map the coins array onto the binary with reduce
    // find the sum with arrSum and add it to the sums set
    let combosStr = combos.toString(2)
    combosStr = '0'.repeat(coins.length - combosStr.length) + combosStr
    let arrSum = a => a.reduce((prev,next)=>prev + next)
    let comboArr = [...combosStr].reduce((acc,v,i,array)=>{
      if(v === '1'){
        return [...acc,coins[i]]
      }else{
        return acc
      }
    },[])

    sums.add(arrSum(comboArr))
    combos --
  }

  return sums.size
}

console.log(possibleSums([10, 50, 100],[1, 2, 1]))//9