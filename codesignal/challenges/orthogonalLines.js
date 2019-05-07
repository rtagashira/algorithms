// Two lines ax + by + c = 0 and a'x + b'y + c' = 0 are orthogonal if and only if
// a * a' + b * b' = 0.

// Check if the two given lines are orthogonal.

function orthogonalLines(line1, line2) {
  return line1[0] * line2[0] + line1[1] * line2[1] === 0
}

console.log(orthogonalLines([1, -1, 0],[1, 1, 0]))//true