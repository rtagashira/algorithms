// Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

// The syntax follows the regular semver ordering rules:

// 1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
// < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0

// There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).


let higherVersion = (ver1, ver2) => {
  let arr1 = ver1.match(/\d+/g)
  let arr2 = ver2.match(/\d+/g)
  for(let i in arr1){
    if(+arr1[i]>+arr2[i]){
      return true
    }else if(+arr2[i]>+arr1[i]){
      return false
    }
  }
  return false
}

let higherVersion = (ver1, ver2) => {
  let arr1 = ver1.split('.'),
      arr2 = ver2.split('.')
  for(let i=0;i<arr1.length;i++){
    if(+arr1[i] > +arr2[i]){
      return true
    }else if(+arr1[i] < +arr2[i]){
      return false
    }
    if(i === arr1.length - 1){
      if(arr1[i] === arr2[i]) return false
    }
  }
}


console.log(higherVersion('1.2.2','1.2.0'))//true
console.log(higherVersion('1.0.5','1.1.0'))//false
console.log(higherVersion('1.1.0','1.1.5'))//false
console.log(higherVersion('10','9'))//true
console.log(higherVersion('0','0'))//false