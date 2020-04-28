// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWords = (s) => s.split(' ').map(x=>[...x].reverse().join('')).join(' ')

console.log(reverseWords("Let's take LeetCode contest"))//"s'teL ekat edoCteeL tsetnoc"