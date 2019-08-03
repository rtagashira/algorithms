// There are some apples that you want to give out as a present. You are going to distribute them between some gift boxes in such a way that all the boxes will contain an equal number of apples. You can leave out some of the apples, but no more than maxResidue. You also don't want to leave out more apples than necessary; that is, if each box contains x apples, the number of left out apples should be less than x.

// Assume that you have an infinite number of gift boxes, and that all of them have the capacity of boxCapacity. In how many ways can you distribute the apples satisfying all of the above conditions?

function applesDistribution(apples, cap, maxResidue) {
  let ways = 0
  for(let i=1;i<=apples;i++){
    if(apples % i <= maxResidue && apples % i <= i && i <= cap){
      ways++
    }
  }
  return ways
}

console.log(applesDistribution(7,4,1))//3
console.log(applesDistribution(10,5,1))//4