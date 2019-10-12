// For a set of points P on a plane, let's denote the set of all distinct distances between the pairs of these points as distinctDistances(P).

// Given a sorted list distances, consisting of three pairwise distinct positive integers, find the set of points P of a minimum size such that distances is a subset of distinctDistances(P) (in other words, each element of distances belongs to distinctDistances(P)). Return the size of P as the answer.

let distinctDistances = (arr) => arr[2] - arr[0] <= arr[1]? 3: 4 

console.log(distinctDistances([3,4,5]))//3
console.log(distinctDistances([4,5,9]))//3
console.log(distinctDistances([4,5,9]))//3
console.log(distinctDistances([4,5,10]))//4
console.log(distinctDistances([1,2,10]))//4