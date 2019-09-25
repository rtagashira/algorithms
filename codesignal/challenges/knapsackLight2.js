// You found two items, for each of them you know their weight. You have a max weight capacity of maxW. If your weight capacity allows you to take with you both items, return "both". If you can take whichever one you want, return "either". If you cannot take any items, return "none". Otherwise, return "first" or "second" based on the index of the item which you can take.

let knapsackLight2 = (w1, w2, maxW)=> {
  if(w1 + w2 <= maxW){
      return 'both'
  }else if(w1 <= maxW && w2 <= maxW){
      return 'either'
  }else if(w1 > maxW && w2 > maxW){
      return 'none'
  }else{
      return w1 <= maxW? 'first': 'second'
  }
}

console.log(knapsackLight2(5,4,8))//'either'
console.log(knapsackLight2(10,4,9))//'second'
console.log(knapsackLight2(5,3,2))//'none'
console.log(knapsackLight2(5,4,9))//'both'