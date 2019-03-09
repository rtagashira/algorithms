// Remove a part of a given array between given 0-based indexes l and r (inclusive).

function removeArrayPart(inputArray, l, r) {
  inputArray.splice(l,r-l+1)
  return inputArray
}

function removeArrayPart(inputArray, l, r) {
  return inputArray.slice(0,l).concat(inputArray.slice(r+1))
}

function removeArrayPart(inputArray, l, r) {
  return [...inputArray.slice(0,l),...inputArray.slice(r+1)]
}

console.log(removeArrayPart([2, 3, 2, 3, 4, 5],2,4))//[2, 3, 5]