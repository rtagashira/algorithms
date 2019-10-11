// You are given a string consisting of words separated by whitespace characters, where the words consist only of English letters. Your task is to swap pairs of consecutive words and return the result.

let swapAdjacentWords = (s) => {
  return s.replace(/(\w+)\s(\w+)/g, '$2 $1');
}

console.log(swapAdjacentWords("CodeFight On"))//"On CodeFight"
console.log(swapAdjacentWords("How are you today guys"))//"are How today you guys"
console.log(swapAdjacentWords(""))//""