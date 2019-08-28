// Determine if a given year is leap or not.

// Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.

function leapYear(y) {
  return y % 400 === 0 || (y % 4 === 0 && y % 100 != 0)
}

console.log(leapYear(2000))//true
console.log(leapYear(1993))//false
console.log(leapYear(1000))//false
console.log(leapYear(0))//true
console.log(leapYear(100))//false