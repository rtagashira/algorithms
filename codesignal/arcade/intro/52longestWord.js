// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function longestWord(str) {
  let arr = str.match(/[a-zA-Z]+/g)
  return arr.reduce((t,v)=>{
    if(v.length>t.length){
      return v
    }else{
      return t
    }
  })
}
//-----------------------------------------------------------------------

function longestWord(text) {
  return text.match(/[A-Za-z]+/g).sort((a,b)=> b.length > a.length)[0];
}


console.log(longestWord("Ready, steady, go!"));//"steady"