// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function lateRide(n) {
  const hours = Math.floor(n / 60).toString()
  const minutes = (n % 60).toString()
  return [...hours, ...minutes].reduce((acc,v)=> +acc + +v)
}

function lateRide(n) {
  const hours = Math.floor(n / 60)
  const minutes = n % 60
  const str = hours.toString() + minutes.toString()
  let sum = 0
  for(let digit of str){
    sum += +digit
  }
  return sum
}

console.log(lateRide(240))//4
console.log(lateRide(808))//14