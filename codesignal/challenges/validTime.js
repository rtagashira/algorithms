// Check if the given string is a correct time representation of the 24-hour clock.

const validTime = (time) => parseInt(time.slice(0,2)) < 24 && parseInt(time.slice(3)) < 60

console.log(validTime("13:58"))//true
console.log(validTime("25:51"))//false
console.log(validTime("02:76"))//false