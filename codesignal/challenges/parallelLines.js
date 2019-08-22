// Two lines ax + by + c = 0 and a'x + b'y + c' = 0 are parallel if and only if
// a * b' = b * a'.

// Check if the two given lines are parallel.

function parallelLines(line1, line2) {
  return line1[0] * line2[1] === line2[0] * line1[1]
}

console.log(parallelLines([1, -1, 0],[1, 1, 0]))//false
console.log(parallelLines([4, 3, 10],[-8, -6, 0]))//true
console.log(parallelLines([8, 18, 13],[2, 11, 18]))//false