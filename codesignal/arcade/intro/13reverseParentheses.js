// You have a string s that consists of English letters, punctuation marks, 
// whitespace characters, and brackets. It is guaranteed that the parentheses in s 
// form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, 
// starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

function reverseParentheses1(s) {
  let leftArr = []
  let rightArr = []
  for(let i=0;i<s.length;i++){
    if(s[i]=== "("){
      leftArr.push(i)
    }
    if(s[i]===")"){
      rightArr.push(i)
    }
  }
  let strArr = s.split('')
  while(leftArr.length >0){
    let left = leftArr.pop()
    let right = rightArr.find((x)=>x>left)
    rightArr = rightArr.filter((x)=>x!=right)
    let word = strArr.splice(left,right-left+1).reverse()
    strArr.splice(left,0,...word)
  }
  return strArr.join('').replace(/[()]/g,"")
}


function reverseParentheses2(s) {
  while (s != (s = s.replace(/\([^(]*?\)/, t => [...t].slice(1, -1).reverse().join(''))));
  return s;
}

function reverseParentheses(s) {

  while (s.indexOf(")", 0) != -1) {
    var c = s.indexOf(")", 0);
    var a = s.lastIndexOf('(', c);
    var b = s.slice(a + 1, c).split("").reverse().join("");
    var s = s.slice(0, a) + b + s.slice(c + 1);

  }
  return s;

}
console.log(reverseParentheses("a(bc)de"))//"acbde"
console.log(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"))//"The god quick nworb xof jumps over the lazy"
