// cs dojo
// https://www.youtube.com/watch?v=GBuHSRDGZBY
// find a number from each array that add up the closest to sum target t.


//finding all pairs
function sumTarget2(arr1,arr2,t){
  let obj = {}
  let pairArr = []
  let tempSum = arr1[0] + arr2[0]
  let finalObj = {}
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      let sum = arr1[i] + arr2[j]
      if(pairArr.length === 0){          //first pair: record its sum in the obj and the pair in pairArr to compare with future pairs
        pairArr.push(arr1[i].toString() + ',' + arr2[j].toString())
        obj[arr1[i]+','+arr2[j]] = sum
      }else if(Math.abs(t - (arr1[i]+arr2[j])) <= Math.abs(t-tempSum)){ 
        // if the current sum is closer to the target, put it in the beginning of the pairArr
        // and archive the sum in the obj
        tempSum = sum
        pairArr.unshift(arr1[i]+','+arr2[j])
        obj[arr1[i]+','+arr2[j]] = sum
      }
    }
  }
  //partial iteration through the pairArr to find the pairs closest to the target
  for(let i=0;i<pairArr.length;i++){
    let dif = Math.abs(t - obj[pairArr[0]])
    if(Math.abs(t - obj[pairArr[i]]) === dif){
      finalObj[pairArr[i]] = obj[pairArr[i]]
    }else{
      break
    }
  }
  return finalObj
}

//----------------------------------------------------------------------------------------
// finding one pair

function sumTarget3(arr1,arr2,t){
  let obj = {}
  let pairArr = []
  let tempSum = arr1[0] + arr2[0]

  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      let sum = arr1[i] + arr2[j]
      if(pairArr.length === 0){          //first pair: record its sum in the obj and the pair in pairArr to compare with future pairs
        pairArr.push(arr1[i].toString() + ',' + arr2[j].toString())
        obj[arr1[i]+','+arr2[j]] = sum
      }else if(Math.abs(t - (arr1[i]+arr2[j])) <= Math.abs(t-tempSum)){ 
        // if the current sum is closer to the target, put it in the beginning of the pairArr
        // and archive the sum in the obj
        tempSum = sum
        pairArr.unshift(arr1[i]+','+arr2[j])
        obj[arr1[i]+','+arr2[j]] = sum
      }
    }
  }
  return {[pairArr[0]]: obj[pairArr[0]]}
}
//------------------------------------------------------------------------------------------
// using sets to find one pair
function sumTarget4(arr1,arr2,t){
  let s1 = new Set(arr1)
  let s2 = new Set(arr2)
  let tPlus = t
  let tMinus = t
  let min = Math.min(...s1) + Math.min(...s2)
  let max = Math.max(...s1) + Math.max(...s2)
  while(tMinus > min || tPlus < max){
    for(let num of s1){
      if(s2.has(tMinus-num)){
        return [num, tMinus-num]
      }else if(s2.has(tPlus-num)){
        return [num,tPlus-num]
      }
    }
    tMinus--
    tPlus++
  }
}
//-----------------------------------------------------------------------------------------------
// using sets to find all pairs

function sumTarget(arr1,arr2,t){
  let s1 = new Set(arr1)
  let s2 = new Set(arr2)
  let tPlus = t
  let tMinus = t
  let pairFound = false
  let arr = []

  while(pairFound === false){
    for(let num of s1){
      if(s2.has(tMinus-num)){
        arr.push([num, tMinus-num])
        pairFound = true
      }else if(s2.has(tPlus-num)){
        arr.push([num, tPlus-num])
        pairFound = true
      }
    }
    tMinus--
    tPlus++
  }
  return arr
}

console.log(sumTarget([-1,3,8,2,9,5],[4,1,2,10,5,20], 24))//3,20 5,20