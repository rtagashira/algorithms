// Given a year, return the century it is in.The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.

//   Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

function centuryFromYear(year) {
  let lastDigit = year.toString().slice(-1)
  let beginning = year.toString().slice(0,-1)
  if(year<=100){
    return 1
  }else if(lastDigit ==='0'){
    return Number(year.toString().slice(0,-2))
  }else{
    return Number(year.toString().slice(0, -2)) + 1
  }
}

console.log(centuryFromYear(1905))
console.log(centuryFromYear(1700))
console.log(centuryFromYear(20))