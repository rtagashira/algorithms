// Given a string, find the number of different non-empty substrings in it.

// A substring of a string S is another string S' that occurs in S. For example, "Fights" is a substring of "CodeFights", but "CoFi" isn't.

let differentSubstringsTrie = (str) => {
  let s = new Set()

  for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
      s.add(str.slice(i,j))
    }
  }
  return s.size
}


console.log(differentSubstringsTrie('abac'))//9
console.log(differentSubstringsTrie("abacaba"))//21
console.log(differentSubstringsTrie("string"))//21