// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

const arrayStringsAreEqual = (arr1, arr2) => arr1.join('') === arr2.join('')