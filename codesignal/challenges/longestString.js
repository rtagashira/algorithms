// Find the longest string from the given array.

function longestString(arr) {
  return arr.reduce((acc,v)=>v.length>acc.length?v:acc)
}

console.log(longestString(["a", "ab", "c"]))//'ab'
console.log(longestString(["xyzte", "x", "xyz"]))//"xyzte"