// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it is able to trap after raining.

function rainWater(arr){
  //iterate looking for peaks
  // a peak will be a number adjacent to a smaller number
  // watch for peaks surrounded by bigger peaks

  let left = 0
  let right = 0
  let peaks = []
  let total = 0
  let maxI = 0
  let secondMaxI = 0
  let maxValue = 0
  let secondMaxValue = 0 
  //find peaks
  for(let i=0;i<arr.length;i++){
    if(i===0){
      if(arr[i]>arr[i+1]){
        peaks.push(i)
        maxI = i
        maxValue = arr[i]
      }
    }else if(i===arr.length-1){
      if(arr[i]>arr[i-1]){
        peaks.push(i)
        if(arr[i]>maxValue){
          secondMaxValue = maxValue
          secondMaxI = maxI
          maxValue = arr[i]
          maxI = i
        }
        else if(arr[i]===maxValue){
          secondMaxValue = arr[i]
          secondMaxI = i
        }
        else if(arr[i]>secondMaxValue){
          secondMaxValue = arr[i]
          secondMaxI = i
        }
      }
    }else{
      if(i!=0 && i!= arr.length-1){
        if(arr[i]>arr[i-1] || arr[i]>arr[i+1]){
          peaks.push(i)
          if(arr[i]>maxValue){
            secondMaxValue = maxValue
            secondMaxI = maxI
            maxValue = arr[i]
            maxI = i
          }
          else if(arr[i]===maxValue){
            secondMaxValue = arr[i]
            secondMaxI = i
          }
          else if(arr[i]>secondMaxValue){
            secondMaxValue = arr[i]
            secondMaxI = i
          }
        }
      }
    }
  }
  
  if(peaks.length<2)return 0
  
  //eliminate small peaks surrounded by the max peaks if there are more than 2 peaks
  let removeArr = []
  if(peaks.length>2){
    for(let i=1;i<peaks.length;i++){
      if(peaks[i]>Math.min(maxI,secondMaxI) && peaks[i]<Math.max(maxI,secondMaxI) && arr[peaks[i]]<secondMaxValue){
        removeArr.push(peaks[i])
      }
    }
  }
  // remove indexes found in removeArr from the peaks array
  if(removeArr.length>0){
    peaks = peaks.filter(v=>removeArr.indexOf(v)<0)
  }
  //iterate to find difference between peak heights and element heights
  for(let i=0;i<arr.length;i++){
    let heightI = 0  //the location of the smallest peak used to find the height of the rain water

    if(left === 0 && right === 0){
      left = peaks.shift()
      right = peaks.shift()
    }else if(i===right && peaks.length>0){
      left = right
      right = peaks.shift()
    }

    //set height by comparing left and right peaks
    arr[left]<arr[right]? heightI = left : heightI = right

    if(i>left && i<right){
        total += arr[heightI] - arr[i]
    }
  }
  return total
}

console.log(rainWater([2,0,2]))//2
console.log(rainWater([3,0,0,2,0,4]))//10
console.log(rainWater([0,1,0,2,1,0,1,3,2,1,2,1]))//6
console.log(rainWater([10,0,1,0,1,0,10,8]))//48
console.log(rainWater([1,2,0,3,4,3]))//2
