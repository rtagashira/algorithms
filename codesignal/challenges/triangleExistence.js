// Check the existence of a triangle with the given side lengths. A necessary and sufficient condition for triangle existence is that the sum of any two of its sides must be strictly greater than the third side.

const triangleExistence = (arr) => arr[0] + arr[1] > arr[2] && arr[1] + arr[2] > arr[0] && arr[0] + arr[2] > arr[1]

// const triangleExistence = ([a, b, c]) => a + b > c && a + c > b && b + c > a