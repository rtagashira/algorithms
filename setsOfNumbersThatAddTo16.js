// cs dojo
// https://www.youtube.com/watch?v=nqlNzOcnCfs

// find how many sets of numbers in the given array add up to 16


// iteration
function setsThatAddTo16(arr){
  let sets = 0
  let iterations = 2 ** arr.length - 1
  const isSum16 = (aa) => {
    return aa.reduce((prev,cur)=> prev + cur) === 16
  }

  while(iterations>0){
    let binNum = '0'.repeat(arr.length - iterations.toString(2).length) + iterations.toString(2)
    let binArr = [...binNum].reduce((acc,v,i,array)=>{
                              if(v === '1'){
                                return [...acc, arr[i]]
                              }else{
                                return acc
                              }
                            },[])
    if(isSum16(binArr)){
      sets ++
    }
    iterations --
  }

  return sets
}


console.log(setsThatAddTo16([2,4,6,10]))//2
console.log(setsThatAddTo16([16,1,2,3]))//1
console.log(setsThatAddTo16([8,5,3,9]))//1
console.log(setsThatAddTo16([15,1,13,3]))//2

