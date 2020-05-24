// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

const sortArrayByParity = (a) => a.sort((x,y)=> x % 2 === 0? -1 : 1)