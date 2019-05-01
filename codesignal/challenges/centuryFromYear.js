// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  if(year <= 100){
    return 1
  }else if(year % 10 === 0){
    return Math.floor(year/100)
  }else{
    return Math.floor(year/100) + 1
  }
}

console.log(centuryFromYear(1905))//20
console.log(centuryFromYear(1700))//17