// Given a reduced improper fraction output it as a reduced mixed fraction.

let improperFractionToMixed = (a) => [Math.floor(a[0]/a[1]), a[0] % a[1], a[1]]


console.log(improperFractionToMixed([7, 2]))//[3, 1, 2]
console.log(improperFractionToMixed([10, 3]))//[3, 1, 3]
console.log(improperFractionToMixed([23, 22]))//[1, 1, 22]
console.log(improperFractionToMixed([8, 5]))//[1, 3, 5]