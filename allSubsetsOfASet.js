// cs dojo
// https://www.youtube.com/watch?v=bGC2fNALbNU

// Find and print all subsets of a given set (Given as an array.)
// number of subsets is equal to 2**n


// recursion
function subsets(arr){
  let subset = new Array(arr.length).fill(null)
  
  const helper = (array,sub,i) => {
    if(i === array.length){
      console.log(sub.filter(x => x!=null))
    }else{
      sub[i] = null
      helper(array,sub,i+1)
      sub[i] = array[i]
      helper(array,sub,i+1)
    }
  }
  helper(arr,subset, 0)
}

//iteration
function subsets(arr){
  let num = 2 ** arr.length - 1
  const subsets = []
  while(num>=0){
    //fill in '0' when the subset length is less than the original array length
    let subset = [...'0'.repeat(arr.length - [...num.toString(2)].length)].concat([...num.toString(2)])
                                                                          .reduce((acc,v,i,array)=>{
                                                                            if(v === '1'){
                                                                              return [...acc, arr[i]]
                                                                            }else{
                                                                              return acc
                                                                            }
                                                                          },[])
    console.log(subset)
    subsets.push(subset)
    num --
  }
  return subsets
}


console.log(subsets([1,2]))
console.log(subsets([1,2,3]))
console.log(subsets([1,2,3,4]))