// cs dojo
// https://www.youtube.com/watch?v=bGC2fNALbNU

// Find and print all subsets of a given set (Given as an array.)


// number of subsets is equal to 2**n

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


// console.log(subsets([1,2]))
console.log(subsets([1,2,3]))