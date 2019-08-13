// Consider the following template for an equation:

// a ? b ? c ? d

// Here each letter stands for an integer value, and ? stands for either an equals sign or a multiplication operator.

// You have an array values that contains four integers. Can you fill the template with the integers, two multiplication operators, and one equals sign, such that the resulting equation will be correct?

function equationTemplate(a) {
  let loops = 2 ** 4 - 2
  while(loops){
    let str = loops.toString(2)
    str = '0'.repeat(a.length - str.length) + str
    let l = 1
    let r = 1
    for(let i in str){
      str[i] === '1'? l *= a[i]: r *= a[i]
    }
    if(l === r) return true
    loops--
  }
  return false
}


function equationTemplate(a) {
  let loops = 2 ** 4 - 2
  const f = (arr)=>{
    let p = 1
    for(let n of arr){
      p *= n
    }
    return p
  }
  while(loops){
    let str = '0'.repeat(a.length - loops.toString(2).length) + loops.toString(2)
    let multipliers = [...str].reduce((acc,v,i,ar)=>{
      if(v === '1'){
        acc.push(a[i])
        return acc
      }else{
        return acc
      }
    },[]) 
    
    let products = [...str].reduce((acc,v,i,ar)=>{
      if(v === '0'){
        acc.push(a[i])
        return acc
      }else{
        return acc
      }
    },[])

    if(f(multipliers) === f(products)) return true
    loops--
  }
  return false
}

console.log(equationTemplate([2, 4, 3, 6]))//true
console.log(equationTemplate([2, 3, 30, 5]))//true
console.log(equationTemplate([2, 3, 5, 5]))//false
console.log(equationTemplate([0,1,1,1]))//false
console.log(equationTemplate([4,4,4,64]))//true