// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function arrayReplace2(arr, el, sub) {
  for(let i=0;i<arr.length;i++){
    if(arr[i]===el){
      arr[i] = sub
    }
  }
  return arr
}

function arrayReplace3(arr, el, sub) {
  return arr.map(v=> v===el?sub:v)
}

function arrayReplace(arr, el, sub) {
  return arr.reduce((t,v,i,array)=>{
    if(v===el){
      return [...t,sub]
    }else{
      return [...t,v]
    }
  },[])
}



console.log(arrayReplace([1, 2, 1],1,3))//[3,2,3]