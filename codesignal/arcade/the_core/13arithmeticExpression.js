// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # 
// with one of the four signs: +, -, * or / to obtain a correct expression.

function arithmeticExpression2(a, b, c) {
  if(a+b===c)return true
  if(a-b===c)return true
  if(a/b===c)return true
  if(a*b===c)return true
  return false
}
//------------------------------------------------------------
function arithmeticExpression3(a, b, c) {
  return a+b===c || a-b===c || a*b===c || a/b===c
}
function arithmeticExpression(A, B, C) {
  return [...'+-*/'].some(op => eval(`${A}${op}${B}`) === C)
}

console.log(arithmeticExpression(2,3,5))//true
console.log(arithmeticExpression(8,2,4))//true
console.log(arithmeticExpression(8,3,2))//false