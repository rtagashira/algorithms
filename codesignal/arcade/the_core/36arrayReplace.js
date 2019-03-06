// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for(let [i,n] of inputArray.entries()){
    if(n === elemToReplace){
      inputArray[i] = substitutionElem
    }
  }
  return inputArray
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for(let i in inputArray){
    if(inputArray[i] === elemToReplace){
      inputArray[i] = substitutionElem
    }
  }
  return inputArray
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(v=>{
    if(v===elemToReplace)return substitutionElem
    else return v
  })
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(v=>v===elemToReplace?substitutionElem:v)
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for(let i=0;i<inputArray.length;i++){
    if(inputArray[i] === elemToReplace){
      inputArray[i] = substitutionElem
    }
  }
  return inputArray
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.reduce((acc,v,i,arr)=>{
    if(v === elemToReplace){
      return [...acc,substitutionElem]
    }else{
      return [...acc,v]
    }
  },[])
}




console.log(arrayReplace([1,2,1],1,3))//[3, 2, 3]