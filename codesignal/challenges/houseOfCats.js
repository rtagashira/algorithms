// There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

function houseOfCats(legs) {
  let arr = []
  while(legs >= 0){
      let humans = 0
      while(humans * 2 <= legs){
          if(humans *2 === legs){
              arr.unshift(humans)
          }
          humans ++
      }
      legs -= 4
  }
  return arr
}

console.log(houseOfCats(6))//[1,3]