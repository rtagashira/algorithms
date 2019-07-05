// It is believed that primeval humans, as far as counting their cattle was concerned, distinguished only among "one", "two", and "many". Given the number of sheep an imaginary primeval man is looking at, return a string he would use to describe that quantity.

function oneTwoMany(n) {
  return n === 1? 'one': n === 2? 'two': 'many'
}

console.log(oneTwoMany(20))//'many'
console.log(oneTwoMany(1))//'one'