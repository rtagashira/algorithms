// Given the x-coordinate of a point on the parabole with specified coefficients, find the y-coordinate of that point.

// Example

// For a = 1, b = 2, c = 3, and x = -1, the output should be
// parabole(a, b, c, x) = 2.

// Explanation: y = ax2 + bx + c = 1 * (-1)2 + 2 * (-1) + 3 = 2.

function parabole(a, b, c, x) {
  return a * x ** 2 + b * x + c
}

console.log(parabole(1,2,3,-1))//2
console.log(parabole(-1,-4,7,14))//-245