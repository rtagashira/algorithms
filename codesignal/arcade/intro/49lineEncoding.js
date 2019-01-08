// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function lineEncoding(s) {
  let arr = []
  let letterStr = ''
  for(let i=0;i<s.length;i++){
    if(letterStr ===''){
      letterStr = s[i]
    }else if(letterStr[0]===s[i]){
      letterStr+=s[i]
    }else if(letterStr[0]!=s[i]){
      arr.push(letterStr)
      letterStr = s[i]
    }

    if(i===s.length-1){
      arr.push(letterStr)
    }
  }

  return arr.reduce((t,v,i,a)=>{
    if(v.length!=1){
      return t+v.length+v[0]
    }else{
      return t+v
    }
  },'')
}
//--------------------------------------------------------------------------------
function lineEncoding3(s) {
  return s.match(/(.)\1*/g).map(x=>(x.length==1?"":x.length)+x[0]).join("")
}

function lineEncoding2 (s){
  return s.replace(/(.)\1*/g, (e,i) => i==e ? i : e.length+i)
}

console.log(lineEncoding("aabbbc"))//"2a3bc"