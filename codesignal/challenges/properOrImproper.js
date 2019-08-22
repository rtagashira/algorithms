// Determine whether a given fraction is proper.

// A fraction written as a/b is said to be a proper fraction if the absolute value of the fraction is strictly less than one. Otherwise it is called an improper fraction.

function properOrImproper(a) {
  return Math.abs(a[0]/a[1])<1? 'Proper':'Improper'
}

console.log(properOrImproper([7,2]))// 'Improper'
console.log(properOrImproper([-3, 3]))// 'Improper'
console.log(properOrImproper([0, -3]))// 'Proper'
console.log(properOrImproper([-2, -3]))// 'Proper'
console.log(properOrImproper([7, 7]))// 'Improper'