// A new parking lot just opened in your city. Its rates are:

//     The first 30 minutes (inclusive) of parking are free;
//     From 31 minutes to 2 hours, every 10 minutes costs $1;
//     Every 10 minutes over 2 hours costs $2.

// Since you are charged for every 10 minutes, you should round the number of minutes spent in the parking lot up to the nearest multiple of 10. For example, if you've been in the parking lot for 43 minutes, you will pay for 50 minutes.

// You are given 2 strings: The time you typically arrive at your usual parking lot, and the time you typically leave it. Now you want to know how much you'll have to pay at the new parking lot. It's guaranteed that all events take place in one day.

let parkingCost = (tIn, tOut) => {
  let hr       = +tOut.slice(0,2) - +tIn.slice(0,2),
      inMin    = +tIn.slice(3),
      outMin   = +tOut.slice(3),
      totalMin = 0,
      cost     = 0
  
  if(hr){
      hr--
      totalMin += 60 - inMin + outMin
      totalMin += hr * 60
  }
  if(!hr){
      totalMin += outMin - inMin
  }
  
  if(totalMin % 10 !== 0) totalMin += 10 - totalMin % 10
  if(totalMin <= 30){
      return 0
  }
  if(totalMin <= 120){
      totalMin -= 30
      return totalMin / 10
  }
  if(totalMin > 120){
      cost += 9
      totalMin -= 120
      return cost += totalMin / 10 * 2
  }
}

console.log(parkingCost("14:11","14:39"))//0
console.log(parkingCost("12:20","14:54"))//17