// There is a bug in one line of the code. Find it, fix it, and submit.
// Given unsorted array of integers, check if it contains at least two equal numbers.

function findEqual(sequence) {

  for (var i = 0; i < sequence.length; i++) {
    for (var j = i + 1; j < sequence.length; j++) {
      if (sequence[i] === sequence[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(findEqual([1, 3, 2, 1]))//true
console.log(findEqual([1, 3, 2]))//false